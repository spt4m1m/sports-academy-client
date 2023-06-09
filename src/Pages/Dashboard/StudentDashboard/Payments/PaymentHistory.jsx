import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../../Components/Loader/Loader';

const Payment = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: payments, refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure(`/paymenthistory?email=${user.email}`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    }
    // console.log(payments.className);
    return (
        <div>
            {
                payments.length > 0 ? <h1 className='text-3xl underline text-center'>Your have {payments.length} Payment History</h1> : <h1 className='text-3xl underline text-center'>You haven't make any payment yet!!</h1>
            }

            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Payment User</th>
                            <th>Transection ID</th>
                            <th>Price</th>
                            <th>Classes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...payments].reverse().map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.paymentuser}</td>
                                <td>{payment.transectionId}</td>
                                <td>{payment.price}Tk.</td>
                                <td>{payment.classesName.map((pclass, index) => <p>{index + 1}. {pclass}</p>)}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Payment;