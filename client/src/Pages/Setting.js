import React from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  const role = "user"
  return (
    <div
      className="row"
      style={{
        marginTop: 100,
        margin: "100px auto 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="col-xl-4">
        {/* Profile picture card*/}
        <div className="card mb-4 mb-xl-0">
          <div className="card-header">Profile Picture</div>
          <div className="card-body text-center">
            {/* Profile picture image*/}
            <img
              className="img-account-profile rounded-circle mb-2"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt
            />
            {/* Profile picture help block*/}
            <div className="small font-italic text-muted mb-4">
              JPG or PNG no larger than 5 MB
            </div>
            {/* Profile picture upload button*/}
            <button
              className="btn btn-primary"
              type="button"
              style={{ backgroundColor: "#1d6d86", borderColor: "#1d6d86" }}
            >
              Upload new image
            </button>
          </div>
        </div>
      {role === 'user'
        ?null :<div className="card" style={{ marginTop: "30px" }}>
          <div className="card-header">Admin management</div>
          <div className="card-body text-center"><p style={{ marginTop: "10px" }}>
            Admin can manage the list of users and announcement.
          </p>
          <Link to="/UserList">
            {" "}
            <button
              className="btn btn-primary"
              type="button"
              style={{
                marginTop: "50px",
                marginLeft: "30px",
                backgroundColor: "#1d6d86",
                borderColor: "#1d6d86",
                margin: "0 auto",
                width: "145px",
                marginBottom: "30px",
              }}
            >
              users
            </button>{" "}
          </Link>
          <Link to="/UserList">
            {" "}
            <button
              className="btn btn-primary"
              type="button"
              style={{
                marginTop: "50px",
                marginLeft: "30px",
                backgroundColor: "#1d6d86",
                borderColor: "#1d6d86",
                margin: "0 auto",
                width: "145px",
                marginBottom: "30px",
              }}
            >
              announcement
            </button>
          </Link>
          </div>
        </div>}
        
      </div>
      <div className="col-xl-8">
        {/* Account details card*/}
        <div className="card mb-4">
          <div className="card-header">Account Details</div>
          <div className="card-body">
            <form>
              <div className="row gx-3 mb-3">
                {/* Form Group (first name)*/}
                <p class="h5">Update FullName</p>

                <div className="col-md-8" style={{ textAlign: "center" }}>
                  <label className="small mb-1" htmlFor="inputFirstName">
                    FullName
                  </label>
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Enter your New FullName"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{
                      marginTop: "15px",
                      backgroundColor: "#1d6d86",
                      borderColor: "#1d6d86",
                    }}
                  >
                    Save changes
                  </button>
                </div>
                {/* Form Group (last name)*/}
                <div className="col-md-6"></div>
              </div>
              {/* Form Row*/}
              <div className="row gx-3 mb-3">
                {/* Form Group (first name)*/}
                <p class="h5">Update Email</p>
                <div className="col-md-8" style={{ textAlign: "center" }}>
                  <label className="small mb-1" htmlFor="inputFirstName">
                    Old email
                  </label>
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Enter your Old email"
                  />
                  <label className="small mb-1" htmlFor="inputLastName">
                    New email
                  </label>
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Enter your New email"
                  />
                  <label className="small mb-1" htmlFor="inputOrgName">
                    Password
                  </label>
                  <input
                    className="form-control"
                    id="inputOrgName"
                    type="text"
                    placeholder="Enter your password"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{
                      marginTop: "15px",
                      backgroundColor: "#1d6d86",
                      borderColor: "#1d6d86",
                    }}
                  >
                    Save changes
                  </button>
                </div>
                {/* Form Group (last name)*/}

                {/* Form Group (location)*/}
              </div>
              {/* Form Row        */}
              {/* Form Group (organization name)*/}
              <p class="h5">Password</p>
              <div className="row gx-3 mb-3">
                {/* Form Group (first name)*/}
                <div className="col-md-8" style={{ textAlign: "center" }}>
                  <label className="small mb-1" htmlFor="inputFirstName">
                    password
                  </label>
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Enter your password"
                  />
                  <label className="small mb-1" htmlFor="inputLastName">
                    newPassword
                  </label>
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Enter your newPassword"
                  />
                  <label className="small mb-1" htmlFor="inputOrgName">
                    repateNewPassword
                  </label>
                  <input
                    className="form-control"
                    id="inputOrgName"
                    type="text"
                    placeholder="repateNewPassword"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{
                      marginTop: "15px",
                      backgroundColor: "#1d6d86",
                      borderColor: "#1d6d86",
                    }}
                  >
                    Save changes
                  </button>
                </div>
                {/* Form Group (last name)*/}
              </div>
              {/* Form Row        */}

              {/* Form Group (email address)*/}
              <p class="h5">Update Profile</p>

              {/* Form Row*/}
              <div className="row gx-3 mb-3">
                {/* Form Group (phone number)*/}
                <div className="col-md-8" style={{ textAlign: "center" }}>
                  <label className="small mb-1" htmlFor="inputPhone">
                    Description
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    type="tel"
                    placeholder="Enter your Description"
                  />
                  <label className="small mb-1" htmlFor="inputBirthday">
                    Age
                  </label>
                  <input
                    className="form-control"
                    id="inputBirthday"
                    type="text"
                    name="birthday"
                    placeholder="Enter Age"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{
                      marginTop: "15px",
                      backgroundColor: "#1d6d86",
                      borderColor: "#1d6d86",
                    }}
                  >
                    Save changes
                  </button>
                </div>
                {/* Form Group (birthday)*/}
              </div>
              {/* Save changes button*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
