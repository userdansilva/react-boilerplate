import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>This is Welcome</h1>

      <Link to="auth/login">
        login
      </Link>
    </div>
  );
}

export default Welcome;
