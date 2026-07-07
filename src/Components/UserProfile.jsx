import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

const UserProfile = () => {

  const { loggedUser } = useContext(MyContext);

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    role: "",
    address: {
      doorNo: "",
      apartment: "",
      street: "",
      city: "",
      pincode: ""
    }
  });

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?username=${loggedUser.username}`
      );

      const data = res.data[0];

      setUser({
        ...data,
        address:
          data.address?.[0] || {
            doorNo: "",
            apartment: "",
            street: "",
            city: "",
            pincode: ""
          }
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    try {

      await axios.put(
        `http://localhost:5000/users/${user.id}`,
        {
          ...user,
          address: [user.address]
        }
      );
      alert("Profile Updated Successfully");
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, address: { ...user.address, [name]: value }});
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="120" alt=""/>
          <h2 className="mt-3">{user.username}</h2>
          <p className="text-secondary">{user.role}</p>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Username</label>
            <input className="form-control" name="username" value={user.username} onChange={handleChange} disabled={!edit}/>
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input className="form-control" name="email" value={user.email} onChange={handleChange} disabled={!edit}/>
          </div>
          <div className="col-md-6 mb-3">
            <label>Phone</label>
            <input className="form-control" name="phone" value={user.phone} onChange={handleChange} disabled={!edit}/>
          </div>
          <div className="col-md-6 mb-3">
            <label>Gender</label>
            <select className="form-control" name="gender" value={user.gender} onChange={handleChange} disabled={!edit}>
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Door No</label>
              <input
                className="form-control"
                name="doorNo"
                value={user.address.doorNo}
                onChange={handleAddressChange}
                disabled={!edit}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Apartment</label>
              <input className="form-control" name="apartment" value={user.address.apartment} onChange={handleAddressChange} disabled={!edit}/>
            </div>
            <div className="col-md-6 mb-3">
              <label>Street</label>
              <input className="form-control" name="street" value={user.address.street} onChange={handleAddressChange} disabled={!edit}/>
            </div>
            <div className="col-md-6 mb-3">
              <label>City</label>
              <input className="form-control" name="city" value={user.address.city} onChange={handleAddressChange} disabled={!edit}/>
            </div>
            <div className="col-md-6 mb-3">
              <label>Pincode</label>
              <input className="form-control" name="pincode" value={user.address.pincode} onChange={handleAddressChange} disabled={!edit}/>
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex gap-3">{!edit ? (
            <button className="btn btn-primary" onClick={() => setEdit(true)}>Edit Profile</button>
          ) : (
            <>
              <button className="btn btn-success" onClick={saveProfile}>Save</button>
              <button className="btn btn-secondary" onClick={() => { setEdit(false); fetchUser();}}>Cancel</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;