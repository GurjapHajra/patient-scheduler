function SignupProfessional() {
	return (
		<>
			<div className="backgroundImg">
		  		<div className="signup-box1 mt-5">
					<h2>New Professional Application</h2>
					<form>
			  			<div className="input-row">
							<div className="user-box">
				  				<input type="text" name="firstName" required /> 
								<label>Username</label>
							</div>
							<div className="user-box">
				  				<input type="password" name="password" required />
								  <label>Password</label>
							</div>	
						</div>
			  			<div className="input-row">
							<div className="user-box">
				  				<input type="text" name="firstName" required />
								  <label>First Name</label>
							</div>
							<div className="user-box">	
				  				<input type="text" name="lastName" required />
								  <label>Last Name</label>
							</div>
							<div className="user-box">
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
							<div className="user-box">
				  				<input type="text" name="age" required />
								<label>Age:</label>
							</div>
							<div className="user-box">
				  				<input type="text" name="specialization" required /> 
								<label>Specialization:</label>
							</div>
							<div className="user-box">
				  				<input type="text" name="location" required />
								<label>Hospital/Clinic Location:</label>
							</div>
			  			</div>
  
			  			<button className="button" style={{ backgroundColor: "#008080" }}>
							Sign Up As A Professional
			  			</button>
					</form>
		  		</div>
			</div>
	  	</>
	);
  }
  
  export default SignupProfessional;
