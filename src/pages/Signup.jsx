import React, { useState } from 'react';

export const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can access the form data in JSON format through the formData state
        console.log(formData);
    };

    return (
        <div>
            <div className="shadow p-3 mb-5 bg-body-tertiary card position-absolute top-50 start-50 translate-middle mt-3" style={{ width: '22rem' }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cnfp" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
