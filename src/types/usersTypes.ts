export enum UserRole {
  user = "Пользователь",
  curator = "Куратор",
  teacher = "Преподаватель",
  admin = "Администратор",
  super = "Суперадминистратор",
}

export type User = {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  role: UserRole;
  createdAt: string;
};
