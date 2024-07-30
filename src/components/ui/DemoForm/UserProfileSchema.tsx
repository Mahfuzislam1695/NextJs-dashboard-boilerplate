import * as yup from "yup";

const UserProfileSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters long"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters long"),
  age: yup
    .number()
    .required("age is required")
    .min(3, "age must be at least 3 characters long"),
});

export default UserProfileSchema;
