import axios from "axios";
import { useEffect, useState } from "react";
import ShowUsers from "./ShowUsers";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ShowUsers users={users} fetchUsers={fetchUsers}/>
  );
};

export default UserPage;