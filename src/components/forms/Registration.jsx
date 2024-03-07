import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";
import NumberInput from "../NumberInput";

const Registration = ({ success }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const formSubmit = (formData) => {
    console.log(formData);
    success(true);
  };

  console.log(fields);

  return (
    <div className="flex flex-col items-center justify-center mx-auto h-screen">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg shadow w-96">
        <form onSubmit={handleSubmit(formSubmit)}>
          <FieldSet label="Enter your basic details">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="password"
                name="password"
                id="password"
                placeholder="enter password"
              />
            </Field>

            <Field label="fullname" error={errors.fullname}>
              <input
                {...register("fullname", {
                  required: "fullname is required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="enter fullname"
              />
            </Field>

            <Field label="age" error={errors.age}>
              <Controller
                name="age"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <NumberInput
                    id="age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    type="number"
                    {...field}
                  />
                )}
                rules={{
                  max: {
                    value: 100,
                    message: "age must be 0 to 100",
                  },
                }}
              />
              {/* <input
                {...register("age", {
                  required: "age is required",
                  max: {
                    value: 100,
                    message: "age must be 0 to 100",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="number"
                name="age"
                id="age"
                placeholder="enter your age"
              /> */}
            </Field>
          </FieldSet>

          <FieldSet label="enter socials details">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex justify-between items-center w-full"
              >
                <Field label="Social Name">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    type="text"
                    {...register(`socials[${index}].name`)}
                    name={`socials[${index}].name`}
                    id={`socials[${index}].name`}
                    placeholder="enter name"
                  />
                </Field>
                <Field label="Social Name">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    type="text"
                    {...register(`socials[${index}].url`)}
                    name={`socials[${index}].url`}
                    id={`socials[${index}].url`}
                    placeholder="enter url"
                  />
                </Field>
                <button
                  className="mt-8 mr-2 text-sm"
                  onClick={() => remove(index)}
                >
                  &#10060;
                </button>
              </div>
            ))}
            <button
              className=" w-32 text-white bg-blue-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-1 mt-2.5 text-center "
              onClick={() => append({ name: "", url: "" })}
            >
              Add social links
            </button>
          </FieldSet>
          <Field>
            <button className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2.5 text-center ">
              Registration
            </button>
          </Field>
        </form>
      </div>
    </div>
  );
};

export default Registration;
