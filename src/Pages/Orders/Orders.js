import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log("user", user)
    const [orders, setOrders] = useState([]);
    console.log("orders", orders);
    const url = `https://genius-car-server-md06nzdtc-arnima12.vercel.app/orders?email=${user?.email}`;
    console.log("url", url);
    useEffect(() => {
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [logOut, url, user.email])
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure ,you want to cancel this order');

        if (proceed) {
            fetch(`https://genius-car-server-md06nzdtc-arnima12.vercel.app/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log("data", data);
                    if (data.deletedCount > 0) {

                        const remaining = orders.filter(odr => odr._id !== _id);
                        setOrders(remaining);
                        alert('Deleted Successfully');
                    }
                })
        }
    }
    const handleStatusUpdate = _id => {
        const url = `https://genius-car-server-md06nzdtc-arnima12.vercel.app/orders/${_id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== _id);
                    const approving = orders.find(odr => odr._id === _id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;