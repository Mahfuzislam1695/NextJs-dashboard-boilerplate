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

  dor: yup
    .date()
    .required("Date of registration is required")
    .max(new Date(), "Date of registration must not future date"),

  full_name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),

  father_name: yup
    .string()
    .required("Father name is required")
    .min(3, "Father name must be at least 3 characters long"),

  marital_status: yup.string().required("Marital status is required"),

  dob: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth must not future date"),

  v_fathr_or_husb_name: yup
    .string()
    .min(3, "Father/Husband Name must be at least 3 characters long"),

  fathr_or_husb_nid: yup
    .string()
    .min(9, "Father/Husband NID No. must be at least 9 digits")
    .max(20, "Father/Husband NID No. must be at most 20 digits"),

  national_id: yup
    .string()
    .required("NID No. is required")
    .min(9, "NID No. must be at least 9 digits")
    .max(20, "NID No. must be at most 20 digits"),

  contact_phone: yup
    .string()
    .required("Contact Number is required")
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),

  emergency_contract_ph: yup
    .string()
    .required("Relative Phone number is required")
    .matches(/^\d{11}$/, "Relative Phone number must be exactly 11 digits"),

  emergency_contract_nm: yup.string(),
  // .min(3, 'Relative Name must be at least 3 characters long'),

  contact_contract_relation: yup
    .string()
    .required("Relation with Volunteer is required"),

  active_fg: yup.string().required("Active status is required*"),
});

export default UserProfileSchema;
// import * as yup from "yup";

// const UserProfileSchema = yup.object().shape({
//   dor: yup
//     .date()
//     .required("Date of registration is required")
//     .max(new Date(), "Date of registration must not future date"),

//   full_name: yup
//     .string()
//     .required("Name is required")
//     .min(3, "Name must be at least 3 characters long"),

//   father_name: yup
//     .string()
//     .required("Father name is required")
//     .min(3, "Father name must be at least 3 characters long"),

//   marital_status: yup.string().required("Marital status is required"),

//   dob: yup
//     .date()
//     .required("Date of birth is required")
//     .max(new Date(), "Date of birth must not future date"),

//   v_fathr_or_husb_name: yup
//     .string()
//     .min(3, "Father/Husband Name must be at least 3 characters long"),

//   fathr_or_husb_nid: yup
//     .string()
//     .min(9, "Father/Husband NID No. must be at least 9 digits")
//     .max(20, "Father/Husband NID No. must be at most 20 digits"),

//   national_id: yup
//     .string()
//     .required("NID No. is required")
//     .min(9, "NID No. must be at least 9 digits")
//     .max(20, "NID No. must be at most 20 digits"),

//   contact_phone: yup
//     .string()
//     .required("Contact Number is required")
//     .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),

//   emergency_contract_ph: yup
//     .string()
//     .required("Relative Phone number is required")
//     .matches(/^\d{11}$/, "Relative Phone number must be exactly 11 digits"),

//   emergency_contract_nm: yup.string(),
//   // .min(3, 'Relative Name must be at least 3 characters long'),

//   contact_contract_relation: yup
//     .string()
//     .required("Relation with Volunteer is required"),

//   active_fg: yup.string().required("Active status is required*"),
// });

// export default UserProfileSchema;

{
  /* <InputDiv1>
<TextField
  size="small"
  fullWidth
  label="Name*"
  variant="outlined"
  defaultValue={volunteerData?.full_name}
  {...register("full_name")}
/>
{errors.full_name && (
  <ErrorMessage>{errors.full_name.message}</ErrorMessage>
)}
</InputDiv1> */
}

// import schema from "./ValidationEdit";

// const {
//   register,
//   control,
//   formState: { errors },
//   handleSubmit,
// } = useForm({
//   resolver: yupResolver(schema),
// });
