import React from "react";
import AuthForm from "../components/AuthForm";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <AuthForm>
      <LoginForm onSubmit={console.log} />
    </AuthForm>
  );
};

export default Login;
