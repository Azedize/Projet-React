import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../Compenents/Loinding/Loading';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [loading, setLoading] = useState(false);
    const Users = useSelector((state) => state.Users);
    const Nav = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setAccept(true);

        let flag = true;

        if (password.length < 8) {
            flag = false;
        }

        if (flag) {
            const user = Users.find((el) => el.email === email && el.password === password);
            if (user) {
                setLoading(true);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                setTimeout(() => {
                    setLoading(false);
                    Nav('/');

                }, 3000);

            } else {
                Swal.fire({
                    title: 'Les informations Incorrectes',
                    icon: 'error',
                });
            }
        }
    }

    return (
        <div>
            <Link to={"/"}>
            <div className='retour'><ion-icon name="chevron-back" style={{ fontSize: "35px", fontWeight: 'bold', padding: '10px'}}></ion-icon></div>
            </Link>
            {loading ? <Loading /> : null}
            <div className='contain'>
                <div className='row-t h-00'>
                    <form className='formtwo' onSubmit={handleSubmit} noValidate>
                        <h1 style={{ marginBottom: '20px' }}>Login Now</h1>
                        <div className='custom-form'>
                            <div className='form-control-t'>
                                <input
                                    id='email'
                                    type='email'
                                    required
                                    placeholder='Email...'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor='email'>Email</label>
                            </div>
                            <div className='form-control-t'>
                                <input
                                    type='password'
                                    minLength={8}
                                    required
                                    placeholder='Password...'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor='password'>Password</label>
                                {password.length < 8 && accept && <p className='error'>Password must be more than 8 char</p>}
                            </div>
                            <div>
                                <button type='submit' className='btnb'>
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
