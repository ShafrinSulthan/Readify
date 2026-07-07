
const ShowUsers = ({ users }) => {
  return (
    <div className="px-2 py-3">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body">
          <h2 className="fw-bold text-primary mb-4">User Management</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark text-center">
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.gender}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.length > 0 ? user.address[0].city : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUsers;