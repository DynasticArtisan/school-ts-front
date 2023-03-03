import { object, string, boolean, TypeOf, infer } from "zod";

export const LoginSchema = object({
  email: string().email().min(2),
  password: string().min(2),
  remember: boolean(),
});
export type LoginSchema = TypeOf<typeof LoginSchema>;

export const RegistrationSchema = object({
  name: string().min(2, "Укажите имя"),
  lastname: string().min(2, "Укажите фамилию"),
  email: string().email("Укажите корректный адрес электронной почты"),
  password: string().min(8, "Пароль должен содержать мининимум 8 символов"),
});
export type RegistrationSchema = TypeOf<typeof RegistrationSchema>;

export const ActivationSchema = object({
  token: string(),
});
export type ActivationSchema = TypeOf<typeof ActivationSchema>;

export const ForgotPasswordSchema = object({
  email: string().email(),
});
export type ForgotPasswordSchema = TypeOf<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = object({
  password: string(),
});
export type ResetPasswordSchema = TypeOf<typeof ResetPasswordSchema>;
