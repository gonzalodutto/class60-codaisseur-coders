import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/thunks";

const Login = () => {
  //1. Make a post request
  //2. Check if I'm getting a token back
  //3. Write a case in the reducer

  const dispatch = useDispatch();

  const [email, setEmail] = useState("kelley@codaisseur.com");
  const [password, setPassword] = useState("abcd");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", email, password);
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
