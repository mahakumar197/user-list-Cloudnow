import React from "react";

const UserData = ({ address }) => {
  if (typeof address === "string") {
    return <td>{address}</td>;
  } else if (typeof address === "object" && address !== null) {
    return (
      <td>
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </td>
    );
  } else {
    return <td>Invalid address format</td>;
  }
};

const UserCompany = ({ company }) => {
  if (typeof company === "string") {
    return <td>{company}</td>;
  } else if (typeof company === "object" && company !== null) {
    return <td>{company.name}</td>;
  } else {
    return <td>Invalid format</td>;
  }
};

const UserTable = ({ users }) => {
  console.log(users, "check");
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <UserData address={user.address} />
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <UserCompany company={user.company} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
