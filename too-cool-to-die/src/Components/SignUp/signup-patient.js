function SignupPatient() {
  return (
    <>
      <div className="backgroundImg">
        <div className="signup-box mt-5">
          <h2>New Patient Application</h2>
          <form>
            <div className="input-row">
              <div className="user-box-2">
                <input type="text" name="firstName" required />
                <label>Username</label>
              </div>
              <div className="user-box-2">
                <input type="password" name="password" required />
                <label>Password</label>
              </div>
            </div>
            <div className="input-row">
              <div className="user-box-2">
                <input type="text" name="firstName" required />
                <label>First Name</label>
              </div>
              <div className="user-box-2">
                <input type="text" name="lastName" required />
                <label>Last Name</label>
              </div>
              <div className="user-box-2">
                <label className="gender-label"></label>
                <select name="gender" required>
                  <option value="">Select Sex</option>
                  <option className="dropdown-color" value="male">
                    Male
                  </option>
                  <option className="dropdown-color" value="female">
                    Female
                  </option>
                  <option className="dropdown-color" value="other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="input-row">
              <div className="user-box-2">
                <input type="text" name="age" required />
                <label>Age</label>
              </div>
              <div className="user-box-2">
                <input type="text" name="weight" required />
                <label>Weight (lb)</label>
              </div>
              <div className="user-box-2">
                <input type="text" name="height" required />
                <label>Height (cm)</label>
              </div>
            </div>

            <div className="input-row">
              <div className="user-box-2">
                <label htmlFor="description"></label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Medical History (Text box): Allergies & Previous diagnoses/treatments"
                ></textarea>
              </div>
            </div>

            <button className="button" style={{ backgroundColor: "#373130" }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPatient;
