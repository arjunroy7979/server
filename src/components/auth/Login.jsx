import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.8:8080/login', user)
            .then((res) => {
                toast(res.data.message)
                setUser({
                    email: '',
                    password: '',
                })
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="container mt-4">
                    <h1 className='text-center text-primary mb-3'>Login</h1>
                    <form className='border shadow p-4 mb-5'>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' id="email" value={user.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' id="password" value={user.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-primary w-100' onClick={login}>Login</button>
                        </div>
                        <div className="mb-3">
                            <p><Link to={'/register'}>Registar</Link> here?</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login