import { object, string, TypeOf } from "zod";

export const CreateModuleSchema = object({
  courseId: string(),
  title: string().min(2),
  description: string().min(2),
});
export type CreateModuleSchema = TypeOf<typeof CreateModuleSchema>;
