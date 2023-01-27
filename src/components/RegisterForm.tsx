import React, { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, PasswordInput } from "../ui";

interface Props {
  onSubmit: SubmitHandler<RegisterFields>;
}

interface RegisterFields {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const RegisterForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<RegisterFields>();

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-form__inputs">
        <Input {...register("name", { required: true })}>Имя</Input>
        <Input {...register("lastname", { required: true })}>Фамилия</Input>
        <Input {...register("email", { required: true })}>
          Адрес элетронной почты
        </Input>
        <PasswordInput
          {...register("password", { required: true })}
          type="password"
        >
          Пароль
        </PasswordInput>
      </div>
      <Button type="submit" className="register-form__submit">
        Зарегестрироваться
      </Button>
      <p className="register-form__agreement">
        Нажимая на кнопку, я соглашаюсь на обработку{" "}
        <a href="#">персональных данных</a>
      </p>
    </form>
  );
};

export default RegisterForm;
