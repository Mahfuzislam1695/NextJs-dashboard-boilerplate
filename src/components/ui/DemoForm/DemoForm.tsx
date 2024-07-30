"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import ImagePart from "./ImagePart";
import UserProfileSchema from "./UserProfileSchema";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const DemoForm = () => {
  const [selectedImage, setSelectedImage] = useState<any>();
  const resolver = yupResolver(UserProfileSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ resolver });
  const onSubmit = (data: IFormInput) => {
    console.log("dddd");

    console.log("data", data);
    alert(JSON.stringify(data));
  };
  return (
    <section className="bg-bgPrimary">
      <div className="container p-4">
        {/* ------------------------------------- Heading ----------------------------------- */}
        <div className="text-brandPrimary font-normal ">
          <h1 className="text-3xl mb-4">Registration Form</h1>
          {/* ------------------------------ LOGIN OPTION ----------------------------------------------- */}
          <p className="text-base">
            Already have an account? &nbsp;
            <span className="text-link cursor-pointer hover:underline">
              Click here to login
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <ImagePart
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>

          <InputField
            inputType="text"
            placeholderText="Enter your last name"
            name="firstName"
            errors={errors}
            register={register}
          />

          <InputField
            inputType="text"
            placeholderText="Enter your last name"
            name="lastName"
            errors={errors}
            register={register}
          />
          <InputField
            inputType="number"
            placeholderText="Enter your last name"
            name="age"
            errors={errors}
            register={register}
          />

          <button type="submit"> submit</button>
        </form>
      </div>
    </section>
  );
};

export default DemoForm;
