import "./login.css";
function Login() {
  return (
    <>
      <div className="backgroundImg">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>

            <button className="button" style={{ backgroundColor: "#373130" }}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
