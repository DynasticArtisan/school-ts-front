import React, { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Input, PasswordInput } from "../ui";
import Checkbox from "../ui/Checkbox";

interface Props {
  onSubmit: SubmitHandler<LoginFields>;
}

interface LoginFields {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<LoginFields>();

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form__inputs">
        <Input {...register("email", { required: true })} type="email">
          Адрес элетронной почты
        </Input>

        <PasswordInput
          {...register("password", { required: true })}
          type="password"
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
