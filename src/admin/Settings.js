import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFileUpload = (e) => {
    // Handle file upload logic here
  };

  const updateProfile = (e) => {
    e.preventDefault();

    // Perform form validation and save/update logic here

    // Reset form fields
    setUsername('');
    setFname('');
    setLname('');
    setEmail('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='container'>
        <div className="mt-4">
      <div className="card-body">
        <div className="d-flex flex-row align-items-center mb-15">
          <div className="d-flex flex-column h-80px px-10 justify-content-around">
            <div className="fw-bold d-flex align-items-center fs-5">
            </div>
            <a href="#" className="fw-semobold text-muted text-hover-info fs-7">
              {/* {userdata.email} */}
            </a>
          </div>
        </div>
        <form onSubmit={updateProfile}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              id="username"
            />
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="fname" className="form-label">First Name</label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="form-control"
                id="fname"
              />
            </div>
            <div className="col">
              <label htmlFor="lname" className="form-label">Last Name</label>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="form-control"
                id="lname"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="new-password" className="form-label">New password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="new-password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">Confirm password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              id="confirm-password"
            />
          </div>
          <div className="mb-15">
            <label htmlFor="about" className="form-label">About</label>
            <textarea className="form-control" id="about"></textarea>
          </div>
          <div className="d-flex flex-row justify-content-end mt-3">
            <div className="w-175px d-flex flex-row justify-content-between">
              <button type="reset" className="btn bg-danger btn-danger mx-5">Reset</button>
              <button type="submit" className="btn btn-info">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Settings;
