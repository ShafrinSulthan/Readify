import { useState } from 'react';
import '../css/LoginSign.css'
import Navbar from '../Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignupPage = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    gender: '',
    phone: '',
    address: {
      doorNo: "",
      apartment: "",
      street: "",
      city: "",
      pincode: ""
    }
  });
  const [error, setError] = useState({})
  const myNavi = useNavigate()
  const [isUsernameOk, setIsUsernameOk] = useState(false)
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData, [name]: value
    })
  }
  function formDataCheck(formData) {  // validation
    let newError = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    // Username
    if (formData.username.trim() === '') {
      newError.username = 'Username is missing'
    } else if (formData.username.length < 8) {
      newError.username = 'Username should be more than 8 character'
    }

    // password
    if (formData.password.trim() === '') {
      newError.password = 'Password is missing'
    } else if (!passwordRegex.test(formData.password)) {
      newError.password = 'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.'
    }

    // Email
    if (formData.email.trim() === '') {
      newError.email = 'Email is missing';
    } else if (!emailRegex.test(formData.email)) {
      newError.email = 'Invalid email address.';
    }

    // Phone
    if (formData.phone.trim() === '') {
      newError.phone = 'Phone number is missing';
    } else if (!phoneRegex.test(formData.phone)) {
      newError.phone = 'Invalid phone number.';
    }

    //gender
    if (formData.gender === '') {
      newError.gender = 'Choose your gender'
    }

    //role
    if (formData.role === '') {
      newError.role = 'Choose your role'
    }

    setError(newError) // local error into state error
    return Object.keys(newError).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    //  validation start
    if (!formDataCheck(formData)) {
      return;
    }

    // validation end

    const res = await axios.post(`https://readify-fdkn.onrender.com/books/users`, formData)
    if (res.data) {
      alert('Account created..')
      setFormData({
        username: '',
        email: '',
        password: '',
        role: '',
        gender: '',
        phone: '',
        address: {
          doorNo: "",
          apartment: "",
          street: "",
          city: "",
          pincode: ""
        }
      })
      myNavi('/login')
    }
  }

  async function checkUsername(e) {
    try {
      const res = await axios.get(
        `https://readify-fdkn.onrender.com/books/users?username=${e.target.value}`
      );

      if (res.data.length > 0) {
        setIsUsernameOk(false);
        setError({ username: "Username already taken" });
      } else {
        setIsUsernameOk(true);
        setError({ username: "Username is available" });
      }

      setTimeout(() => {
        setError({});
        setIsUsernameOk(false);
      }, 9000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">
          <p className="eyebrow">Join the community</p>
          <h2>Create your Readify account</h2>
          <p className="auth-copy">Start your reading journey with exclusive offers and curated picks.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Username */}
            <label>
              Full name
              <input type="text" name='username' onBlur={checkUsername} onFocus={() => { setError({}); setIsUsernameOk(false); }} placeholder="Full Name" onChange={handleChange} value={formData.username} required />
            </label>
            {isUsernameOk ? (
              <small className="text-success">{error.username}</small>
            ) : (
              error.username && (
                <small className="text-danger">{error.username}</small>
              )
            )}

            {/* Email */}
            <label>
              Email
              <input type="email" name='email' placeholder="you@example.com" onChange={handleChange} value={formData.email} required />
            </label>
            {error.email && <small className='text-danger'>{error.email}</small>}
            <label>
              Password
              <input type="password" name='password' value={formData.password} placeholder="Create a strong password" onChange={handleChange} required />
            </label>
            {error.password && <small className='text-danger'>{error.password}</small>}
            <label>
              Phone Number
              <input type="tel" name="phone" value={formData.phone} placeholder="Enter phone number" onChange={handleChange} required />
            </label>
            {error.phone && <small className='text-danger'>{error.phone}</small>}

            <label className="mb-2">Gender</label>

            <div className="gender-group">

              <label className="gender-option">
                <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
                Male
              </label>
              <label className="gender-option">
                <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />
                Female
              </label>
              {error.gender && <small className='text-danger'>{error.gender}</small>}

            </div>

            <label>
              Role
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            {error.role && <small className='text-danger'>{error.role}</small>}

            <button type="submit" className="primary-btn full-width">Sign Up</button>
          </form>

          <Link to='/login' type="button" className="text-btn">
            Already have an account? Log in
          </Link>
        </div>
      </section>
    </>
  )
}

export default SignupPage