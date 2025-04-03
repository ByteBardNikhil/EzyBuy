import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="register">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button type="submit">Login</button>
      </form>
      <p>
        create new account.&nbsp;{" "}
        <Link to="/register">
          <strong>Register</strong>
        </Link>
      </p>
    </div>
  );
};
export default Login;
