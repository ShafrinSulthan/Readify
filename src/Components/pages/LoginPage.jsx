import { Link, useNavigate } from 'react-router-dom';
import '../css/LoginSign.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { MyContext } from '../../App';
const LoginPage = () => {
  const { loggedUser, setLoggedUser } = useContext(MyContext)
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user, [e.target.name]: e.target.value
    });
  }
  const myNavi = useNavigate()
  useEffect(() => {
    if (loggedUser) {
      if (loggedUser.role === 'admin') {
        myNavi('/admin')
      } else if (loggedUser.role === 'user') {
        myNavi('/user')
      }
    }
  }, [loggedUser])
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.get( `https://readify-fdkn.onrender.com/users?username=${user.username}&password=${user.password}`);

      if (res.data.length > 0) {
        setLoggedUser({
          username: res.data[0].username,
          role: res.data[0].role
        })
        localStorage.setItem("user", JSON.stringify({
          username: res.data[0].username,
          role: res.data[0].role
        }))
        if (res.data[0].role === 'user') {
          myNavi('/user')
        } else if (res.data[0].role === 'admin') {
          myNavi('/admin')
        } else {

        }
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">
          <p className="eyebrow">Welcome back</p>
          <h2>Sign in to Readify</h2>
          <p className="auth-copy">Pick up your next favorite story in seconds.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label> User Name
              <input type="text" placeholder="User Name" onChange={handleChange} name="username" required />
            </label>

            <label> Password
              <input type="password" placeholder="Enter your password" onChange={handleChange} name="password" required />
            </label>
            {
              error && <p className='text-danger'>Username or Password is Incorrect</p>
            }
            <button type="submit" className="primary-btn full-width">Login</button>
          </form>

          <Link to="/signup" className="text-btn"> Need an account? Create one</Link>
        </div>
      </section>
    </>
  )
}

export default LoginPage