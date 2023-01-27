import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const [success, setSuccess] = useState();

  if (success) {
    return <div className="register-success"></div>;
  }

  return (
    <AuthForm>
      <RegisterForm onSubmit={console.log} />
    </AuthForm>
  );
};

export default Register;
