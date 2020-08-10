import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
   
    return () => {

    }
  }, []);

  const submitHandler = e => {
    e.preventDefault();
  }

 
  return (
  <div className="form">
    <form onSubmit={submitHandler}>
      <ul className="form-container">
        <li>
          <h3>Sing in</h3>
        </li>
        <li>
          <label for="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </li>
        <li>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" onChange={(e) => setEmail(e.target.value)} />
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to Amazona?
        </li>
        <li>
          <Link to="/register" className="button secondary text-center">Create your Amazona Account</Link>
        </li>
      </ul>
    </form>
   
  </div>);
}

export default SigninScreen;
