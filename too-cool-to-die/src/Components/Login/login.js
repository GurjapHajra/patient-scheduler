import "./login.css";
function Login() {
  return (
    <>
      <div className="backgroundImg">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input id="username" type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input id="password" type="password" name="" required="" />
              <label htmlFor="password">Password</label>
              <input id="show-password" type="checkbox"/>
              <label htmlFor="show-password">Show Password</label>
            </div>
            
            <button onClick={logUser} className="button" style={{ backgroundColor: "#373130" }}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function logUser(event) {
    event.preventDefault();
    let id = document.getElementById("username");
    let password = document.getElementById("password");

    let data = null;
    let loginSuccess = false;

    async function fetchData() {
        try {
            const response = await fetch('https://tyraoeguv8.execute-api.us-east-1.amazonaws.com/items');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            data = await response.json(); 
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    async function processData() {
        await fetchData();
        if (data) {
            data.forEach(item => {
                console.log("Data found")
                if (item.id == id && item.password == password) {
                    let loginSuccess = true;
                }
            });
        } else {
            console.log('Data is still loading...');
        }
    }
    if (loginSuccess) {
        alert("Logged In")
    }
        
    processData();

        
}


export default Login;
