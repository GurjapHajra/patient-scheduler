import "./signup.css";
import axios from "axios";

function SignupPatient() {
  function putPatient(event) {
    event.preventDefault();
    const article = {
      id: document.getElementById("username").value,
      password: document.getElementById("password").value,
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      gender: document.getElementById("gender").value,
      age: document.getElementById("age").value,
      weight: document.getElementById("weight").value,
      height: document.getElementById("height").value,
      description: document.getElementById("description").value,
    };

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      "https://tyraoeguv8.execute-api.us-east-1.amazonaws.com/items";

    axios
      .put(proxyUrl + apiUrl, article, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // handle response
        console.log("Success:", response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error.response || error);
      });
  }

  return (
    <>
      <div className="backgroundImg">
        <div className="signup-box mt-5">
          <h2>New Patient Application</h2>
          <form onSubmit={putPatient}>
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
              type="submit"
              style={{ backgroundColor: "#373130", marginTop: "15px" }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPatient;
