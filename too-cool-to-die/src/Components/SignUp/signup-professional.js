import axios from "axios";

function SignupProfessional() {
	function putProfessional(event) {
		event.preventDefault();
		const article = {
		  id: document.getElementById("username").value,
		  password: document.getElementById("password").value,
		  name: document.getElementById("firstName").value + document.getElementById("lastName"),
		  gender: document.getElementById("gender").value,
		  cost: document.getElementById("cost").value,
		  available_times: document.getElementById("available_times").value,
		  speciality: document.getElementById("specialization").value,
		  location: document.getElementById("location").value
		};
	
		const proxyUrl = "https://cors-anywhere.herokuapp.com/";
		const apiUrl =
		  "https://b12hc34nof.execute-api.us-east-1.amazonaws.com/practitioners";
	
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
			<div className="background">
		  		<div className="signup-box mt-5">
					<h2>New Professional Application</h2>
					<form onSubmit={putProfessional}>
			  			<div className="input-row">
							<div className="user-box-2">
				  				<input type="text" name="username" id="username" required /> 
								<label>Username</label>
							</div>
							<div className="user-box-2">
				  				<input type="password" name="password" id="password" required />
								  <label>Password</label>
							</div>	
						</div>
			  			<div className="input-row">
							<div className="user-box-2">
				  				<input type="text" name="firstName" id="firstName" required />
								  <label>First Name</label>
							</div>
							<div className="user-box-2">	
				  				<input type="text" name="lastName" id="lastName" required />
								  <label>Last Name</label>
							</div>
							<div className="user-box-2">
				  				<label className="gender-label"></label>
				  				<select name="gender" id="gender" required>
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
							<div className="user-box-2">
				  				<label className="cost-label"></label>
				  				<select name="cost" id="cost" required>
									<option value="">Cost</option>
									<option className="dropdown-color" value="male">
					  					Low
									</option>
									<option className="dropdown-color" value="female">
					  					Medium
									</option>
									<option className="dropdown-color" value="other">
					  					High
									</option>
				  				</select>
							</div>
			  			</div>
  
			  			<div className="input-row">
							<div className="user-box-2">
				  				<input type="text" name="available_times" id="available_times" required />
								<label>Available Times:</label>
							</div>
							<div className="user-box-2">
				  				<input type="text" name="specialization" id="specialization" required /> 
								<label>Specialization:</label>
							</div>
							<div className="user-box-2">
				  				<input type="text" name="location" id="location" required />
								<label>Hospital Location:</label>
							</div>
			  			</div>
  
			  			<button type="submit" className="button" style={{ backgroundColor: "#008080" }}>
							Sign Up As A Professional
			  			</button>
					</form>
		  		</div>
			</div>
	  	</>
	);
  }
  
  export default SignupProfessional;
