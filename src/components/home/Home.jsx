import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Logout from '../pages/Logout';
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.8:8080/user-data').then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [])

    return (
        <>
            <div className="container mt-4">
                <h1 className='text-primary text-center'>User Data</h1>
                <Logout/>
                <table className="table table-bordered shadow border-primary mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date & Login Time</th>
                            <th scope="col">Date & Logout Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item) => {
                                const { _id, fullname, username, email, loginTimes, logoutTime } = item
                                return (
                                    <tr key={_id}>
                                        <td>{_id}</td>
                                        <td>{fullname}</td>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td className='m-0 p-0'>{loginTimes.map((i)=><p className='border p-0 m-1'>{i}</p>)}</td>
                                        <td className='m-0 p-0'>{logoutTime.map((i)=><p className='border p-0 m-1'>{i}</p>)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home