import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">
          <strong>Login</strong>
        </Link>
      </p>
    </div>
  );
};
export default Register;
