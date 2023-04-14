import { useState} from "react";

var style = {
  width: "300px",
  boxShadow: "0 0 10px black",
  padding: "30px",
  margin: "150px auto",
  textAlign: "center",
};
function Login({logdata,setlogdata}) {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleAuthentication = () => {
    if (
      (user.name === "admin" && user.password === "admin")
    ) {
    setlogdata(true)
    } else {
      alert("Enter Proper Credentials");
    }
  };
  return (
    <div style={style}>
      <h3>Login Form </h3>
      <div>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={handleAuthentication}>Login</button>
      </div>
    </div>
  );
}

export default Login;