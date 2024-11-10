import "./signup.css";
import axios from "axios";

function SignupPatient() {
  function putPatient(event) {
    event.preventDefault();
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const article = {
      username: "username",
      password: "password",
      firstname: "firstname",
      lastname: "lastname",
      gender: "gender",
      age: "age",
      weigth: "weight",
      height: "height",
      description: "description",
    };
    
    axios
      .put(
        "https://tyraoeguv8.execute-api.us-east-1.amazonaws.com/items",
        article
      )
      .then((response) => {});
  }
  return (
    <>
      <div className="backgroundImg">
        <div className="signup-box mt-5">
          <h2>New Patient Application</h2>
          <form>
            <div className="input-row">
              <div className="user-box-2">
                <input type="text" name="username" id="username" />
                <label>Username</label>
              </div>
              <div className="user-box-2">
                <input type="password" name="password" id="password" />
                <label>Password</label>
              </div>
            </div>
            <div className="input-row">
              <div className="user-box-2">
                <input type="text" name="firstname" id="firstname" />
                <label>First Name</label>
              </div>
              <div className="user-box-2">
                <input type="text" name="lastname" id="lastname" />
                <label>Last Name</label>
              </div>
              <div className="user-box-2">
                <label className="gender-label"></label>
                <select name="gender" id="gender">
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
                <input type="text" name="age" id="age" />
                <label>Age</label>
              </div>
              <div className="user-box-2">
                <input type="text" name="weight" id="weight" />
                <label>Weight (lb)</label>
              </div>
              <div className="user-box-2">
                <input type="text" name="height" id="height" />
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

            <button
              className="button"
              onClick={putPatient}
              style={{ backgroundColor: "#373130", marginTop: "15px" }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );

  let e = document.getElementsByName("e");
}

export default SignupPatient;
