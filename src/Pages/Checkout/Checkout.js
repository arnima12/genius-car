import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        // if (phone.length > 11 && phone.length < 11) {
        //     alert("Phone number should be 11 characters")
        // }
        // else {
        //     alert("ok");
        // }
        fetch("https://genius-car-server-md06nzdtc-arnima12.vercel.app/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('User added successfully');
                    form.reset();
                }
            }
            )
            .catch(er => console.error(er));
    }
    return (
        <form onSubmit={handlePlaceOrder}>
            <h2 className="text-4xl text-center">You are about to order: {title}</h2>
            <h4 className="text-3xl text-center">${price}</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full " required />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full " required />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full " required />
                <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full readOnly" />
            </div>
            <textarea name="message" className="textarea textarea-bordered w-full h-48" placeholder="Your Message" required></textarea>
            <div className="flex justify-center my-4"><input className="btn bg-white text-red-500 border-red-500 border-2" type="submit" value="Place your order" /></div>
        </form>
    );
};

export default Checkout;