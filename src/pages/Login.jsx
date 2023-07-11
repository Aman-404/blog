import React from 'react'

export const Login = () => {
    return (
        <div>
            <div className="shadow p-3 mb-5 bg-body-tertiary card position-absolute top-50 start-50 translate-middle mt-3" style={{ width: '22rem',height:'17rem'}}>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
