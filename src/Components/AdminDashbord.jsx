import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { MyContext } from '../App'
import logo from "../assets/logo.png";

const AdminDashbord = () => {
  const { loggedUser, setLoggedUser } = useContext(MyContext)
  const myNavi = useNavigate()
  useEffect(() => {
    if (!loggedUser) {
      myNavi("/login");
      return;
    }

    // Prevent user from opening admin pages
    if (loggedUser.role !== "admin") {
      myNavi("/user");
    }

  }, [loggedUser]);
  function logout() {
    setLoggedUser(null)
    localStorage.removeItem('user')
    myNavi('/')
  }
  return (
    <div>
      <div className="container-fluid p-0">
        <div id="offcanvas-view">
          <button className="m-2 d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#menu">
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="offcanvas offcanvas-start bg-dark text-light" id="menu">
            <div className="offcanvas-header">
              <img src={logo} alt="Logo" className="img-fluid" width="60" height="60"/>
              <button className="btn-close bg-light" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <div>
                <div className="mt-5">
                  <Link to='/admin' className='nav-link my-3'>Home</Link>
                  <Link to='users' className='nav-link my-3'>Users</Link>
                  <Link to='orders' className='nav-link my-3'>Orders</Link>
                  <Link to='profile' className='nav-link my-3'>Profile</Link>
                  <button className="mt-5 btn btn-warning mx-auto" onClick={logout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 m-0">
          <div className="sidebar col-lg-2 d-none d-lg-block">

            <div className="sidebar-box  bg-dark text-light p-3">
              <img src={logo} alt="Logo" className="img-fluid" width="100"/>

              <div className="mt-5">
                <Link to='/admin' className='nav-link my-3'>Home</Link>
                <Link to='users' className='nav-link my-3'>Users</Link>
                <Link to='orders' className='nav-link my-3'>Orders</Link>
                <Link to='profile' className='nav-link my-3'>Profile</Link>
                <button className='mt-5 btn btn-warning mx-auto'>Logout</button>
              </div>
            </div>
          </div>
          <div className="content px-4">

            <div className="row py-3">
              <Outlet />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashbord