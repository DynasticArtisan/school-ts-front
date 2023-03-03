import React, { FC } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { setCredentials } from "../redux/slices/authSlice";
import { LoginSchema } from "../schemas/authSchemas";
import { Button, Input, PasswordInput } from "../ui";
import { zodResolver } from "@hookform/resolvers/zod";
import Checkbox from "../ui/Checkbox";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin = handleSubmit(async (payload) => {
    try {
      const res = await login(payload).unwrap();
      dispatch(setCredentials(res));
    } catch (e) {}
  });

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="login-form__inputs">
        <Input {...register("email")} invalid={Boolean(errors.email)}>
          Адрес элетронной почты
        </Input>

        <PasswordInput
          {...register("password")}
          invalid={Boolean(errors.password)}
        >
          Пароль
        </PasswordInput>
      </div>
      <div className="login-form__options">
        <div className="login-form__remember">
          <Checkbox {...register("remember")} view="small" />
          <span>Запомнить меня</span>
        </div>
        <Link to="/forgot" className="login-form__forgot-password">
          Забыли пароль?
        </Link>
      </div>
      <Button type="submit" className="login-form__submit">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
