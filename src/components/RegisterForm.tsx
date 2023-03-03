import React, { FC, useEffect } from "react";
import { useRegistryMutation } from "../redux/api/authApi";
import { RegistrationSchema } from "../schemas/authSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, PasswordInput } from "../ui";

const RegisterForm: FC = () => {
  const [registry, { error, data }] = useRegistryMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(RegistrationSchema),
  });

  const handleRegistry = handleSubmit(registry);

  const errorMsg =
    errors.name ||
    errors.lastname ||
    errors.email ||
    errors.password ||
    error?.data;

  return (
    <form className="register-form" onSubmit={handleRegistry}>
      <div className="register-form__inputs">
        <Input {...register("name")} invalid={Boolean(errors.name)}>
          Имя
        </Input>
        <Input {...register("lastname")} invalid={Boolean(errors.lastname)}>
          Фамилия
        </Input>
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
      {errorMsg && (
        <div className="register-form__error">{errorMsg.message}</div>
      )}

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
