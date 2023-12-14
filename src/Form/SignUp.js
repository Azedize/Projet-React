import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../Compenents/Loinding/Loading';


export default function SignUp() {
    let flag = true;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')
    const [accept, setAccept] = useState(false)
    const [loading, setLoading] = useState(false);

    const Nav = useNavigate();
    const dispatch = useDispatch()

    const Users = useSelector(state => state.Users);


    async function Submit(e) {
        e.preventDefault()
        setAccept(true)
        if (name === "" || password.length < 8 || passwordR !== password) {
            flag = false
        } else { flag = true }
        
            if (flag) {
                setLoading(true)
                dispatch({
                    type:"ADD_USER",
                    payload:
                    {
                        id: uuidv4(),
                        nom: name,
                        email: email,
                        password: password,
                        function: "Client"
                    }
                })
                localStorage.setItem('email',email)
                localStorage.setItem('name',name)
                localStorage.setItem('password', password)
                setTimeout(() => {
                    setLoading(false);
                    Nav('/');
                }, 3000);
        

            }
        console.log(Users)

    }


    return (
        <div>
            <Link to={"/"}>
                <div className='retourr'><ion-icon name="chevron-back" style={{ fontSize: "35px", fontWeight: 'bold', padding: '10px' }}></ion-icon></div>
            </Link>
            {loading ? <Loading /> : null}

            <div className='contain' style={{marginTop:"20px"}}>

                <div className='row-t h-00'>
                    <form className='formtwo ' onSubmit={Submit} noValidate >
                        <h1 style={{marginBottom:'20px'}}>Register Now</h1>
                        <div className='custom-form'>
                            <div className='form-control-t'>
                                <input id='name' type="text" required placeholder='Name...'  value={name} onChange={(e) => { setName(e.target.value) }} />
                                <label htmlFor="name">Name</label>
                                {name === '' && accept && <p className='error'> Username is required </p>}
                            </div>
                            <div className='form-control-t'>
                                <input   id='email' type="email" required placeholder='Email...' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className='form-control-t'>
                                <input  type="password" minLength={8} required placeholder='Password...' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                <label htmlFor="password">Password</label>
                                {password.length < 8 && accept && <p className='error'>Password must be more than 8 char</p>}
                            </div>
                            <div className='form-control-t'>
                                <input  type="password" minLength={8} required placeholder='Repat password...' value={passwordR} onChange={(e) => { setPasswordR(e.target.value) }} />
                                <label htmlFor="passwordR">Repeat Password</label>
                                {passwordR !== password && accept && <p className='error'>Password is not match</p>}
                            </div>
                            <div >
                                <button type='submit' className='btnb'>Register</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
