import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createNewUser, signInWithGoogle, error, success, signInWithGithub, updateName, setUser, setError, setSuccess, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log(redirect_uri);

  // google sign in handle
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess("Login Success");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // email sign in handle
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess("Login Success");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // handle Email pass register
  const HandleEmailSignUp = () => {
    if (!name || !email || !password) {
      setError("Must fill up all field");
      return;
    }
    createNewUser(name, email, password)
      .then(() => {
        updateName(name);
        setSuccess("Login Success");
        setError("");
        history.push(redirect_uri);
        // user.reload();
        setUser({ email: email, displayName: name });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="p-5 shadow-lg rounded-3">
        <h1 className="text-primary mb-4 text-center">Register</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input onBlur={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputName" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input onBlur={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input onBlur={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="text-danger mb-3">{error}</div>
          <div className="text-success mb-3">{success}</div>
          <button onClick={HandleEmailSignUp} type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <h6 className="text-center mt-3">Or Register with</h6>
        <div className="row row-cols-2 g-3 mt-2">
          <div className="col text-center">
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-primary">
              <i className="fab fa-google text-white"></i>
            </button>
          </div>
          <div className="col text-center">
            <button onClick={handleGithubSignIn} type="button" className="btn btn-primary">
              <i className="fab fa-github text-white"></i>
            </button>
          </div>
        </div>

        <div className="mt-4">
          New user?{" "}
          <Link to="/login" className="text-decoration-none fw-bold">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
