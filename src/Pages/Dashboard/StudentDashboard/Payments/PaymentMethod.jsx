import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import CheckOutForm from './CheckOutForm';
import { AuthContext } from '../../../../Providers/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../../Components/Loader/Loader';

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PK)
const PaymentMethod = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: selectedClass, refetch } = useQuery({
        queryKey: ['selectedclass'],
        queryFn: async () => {
            const res = await axiosSecure(`/selectedclass?email=${user?.email}`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    };
    const total = selectedClass.result.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1 className='text-3xl underline text-center'>Confirm your Payment total - {price}Tk</h1>


            <Elements stripe={stripePromise}>
                <CheckOutForm selectedClass={selectedClass.result} price={price} />
            </Elements>

        </div>
    );
};

export default PaymentMethod;