import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Register = () => {

    const [user, setUser] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        cpassword: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = (e) => {
        e.preventDefault();
        const { fullname, username, email, password, cpassword } = user
        if (fullname && username && email && password && (password === cpassword)) {
            axios.post('http://127.0.0.8:8080/register', user)
                .then((res) => {
                    toast(res.data.message)
                    setUser({
                        fullname: '',
                        username: '',
                        email: '',
                        password: '',
                        cpassword: '',
                    })
                })
        } else {
            toast(`Required all fields`)
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="container mt-4">
                    <h1 className='text-center text-primary mb-3'>Registration</h1>
                    <form className='border shadow p-4 mb-5'>
                        <div className="mb-3">
                            <label for="fullname" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name='fullname' id="fullname" value={user.fullname} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="username" className="form-label">User Name</label>
                            <input type="text" className="form-control" name='username' id="username" value={user.username} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' id="email" value={user.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' id="password" value={user.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="confirmpassword" className="form-label">Confirm Password</label>
                            <input type="text" className="form-control" name='cpassword' id="confirmpassword" value={user.cpassword} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-primary w-100' onClick={register}>Registar</button>
                        </div>
                        <div className="mb-3">
                            <p><Link to={'/'}>Login</Link> here?</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register