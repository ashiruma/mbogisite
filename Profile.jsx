import React, { useState, useEffect } from "react";

const getUser = () =>
  JSON.parse(localStorage.getItem("user") || '{"username":"admin","email":"admin@mbogiwood.com"}');

const Profile = () => {
  const [user, setUser] = useState(getUser());
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(user);

  useEffect(() => setForm(user), [edit, user]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSave = (e) => {
    e.preventDefault();
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setEdit(false);
  };

  return (
    <div>
      <h1>User Profile</h1>
      {!edit ? (
        <>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={() => setEdit(true)}>Edit Profile</button>
        </>
      ) : (
        <form onSubmit={handleSave} style={{ maxWidth: "400px" }}>
          <label>
            Username:
            <input name="username" value={form.username} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Email:
            <input name="email" value={form.email} onChange={handleChange} required type="email" />
          </label>
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEdit(false)} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;