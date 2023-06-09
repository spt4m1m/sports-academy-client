import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = ({ selectedClass, price }) => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,
                    },
                },
            },
        );
        if (paymentIntent.status == 'succeeded') {
            setTransectionId(paymentIntent.id)
            const payment = {
                transectionId: paymentIntent.id,
                paymentuser: user.email,
                price,
                quantity: selectedClass.length,
                classesId: selectedClass.map(sclass => sclass._id),
                classesName: selectedClass.map(sclass => sclass.classname)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            title: 'Payment Success',
                            icon: 'success'
                        })
                        navigate('/dashboard/student/enrolledclass')
                    }
                })
        }
    }

    return (
        <>
            <form className="w-1/3 text-white mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    className="border border-primary p-5 rounded-md my-5"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: 'red',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm btn-outline" type="submit" disabled={!stripe || !clientSecret || transectionId}>
                    Pay
                </button>
            </form>
            {cardError && <h1 className="text-red-600 text-center my-3">{cardError}</h1>}
            {transectionId && <h1 className="text-green-600 text-center my-3">Payment Success Transecion id : {transectionId}</h1>}
        </>
    );
};

export default CheckOutForm;