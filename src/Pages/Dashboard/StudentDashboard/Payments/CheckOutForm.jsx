import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";


const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
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
            console.log('payment method', paymentMethod)
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