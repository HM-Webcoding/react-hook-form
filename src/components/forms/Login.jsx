import React from "react";
import { useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const formSubmit = (fromData) => {
    const user = {
      email: "x@example.com",
      password: "123456789",
    };
    if (fromData.email === user.email) {
      setError("root.random", {
        message: `User with email '${formData.email}' is not found`,
        type: "random",
      });
    }
  };
  console.log(errors);
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-screen">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg shadow w-96 ">
        <form onSubmit={handleSubmit(formSubmit)}>
          <FieldSet label="Sign in to your account">
            <Field label="email" error={errors.email}>
              <input
                {...register("email", { required: "email is required" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="email"
                name="email"
                id="email"
                placeholder="enter email address"
              />
            </Field>
            <Field label="password" error={errors.password}>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "password must be 8 character ",
                  },
                })}
                className={` text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                  errors.password ? "border-red-500" : "border-gray-200"
                }`}
                type="password"
                name="password"
                id="password"
                placeholder="enter password"
              />
            </Field>
            <div>{errors?.root?.random?.message}</div>
            <div>{errors?.root?.random?.message}</div>
            <Field>
              <button className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2.5 text-center ">
                Login
              </button>
            </Field>
          </FieldSet>
        </form>
      </div>
    </div>
  );
};

export default Login;
