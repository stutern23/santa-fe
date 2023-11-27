import { useState } from "react";
import { Input } from "./components/form";
import { AuthLayout, Button, TwToast } from "./components/ui";
import { useSignupValidation } from "./hooks";
import { twMerge } from "tailwind-merge";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./lib";
import { toast } from "react-hot-toast";

export default function Signup() {
  const { formData, handleChange, formErrors, isFormValid, validate } =
    useSignupValidation();

  const [consent, setConsent] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: () => {
      validate();
      const { email, childsAge, ..._formData } = formData;
      return axiosInstance.post("auth/signup", {
        ..._formData,
        parentEmail: email,
        childAge: childsAge,
      });
    },
    onSuccess() {
      toast.custom(TwToast);
    },
  });

  return (
    <AuthLayout>
      <div className="bg-PRIMARY rounded-[20px] py-8 px-4 md:px-10 mb-7">
        <p className="font-montserrat text-white text-xl">Create an account</p>

        <div className="grid gap-5 mt-6 ">
          <div className="md:flex justify-between gap-2">
            <Input
              inputProps={{
                placeholder: "John",
                value: formData.parentFirstName,
                name: "parentFirstname",
                onChange: (e) =>
                  handleChange("parentFirstName", e.target.value),
              }}
              label="Parent First Name"
              error={formErrors.parentFirstName}
              containerClass="w-full"
            />
            <Input
              inputProps={{
                placeholder: "Doe",
                value: formData.parentLastName,
                name: "parentLastName",
                onChange: (e) => handleChange("parentLastName", e.target.value),
              }}
              label="Parent Last Name"
              error={formErrors.parentLastName}
              containerClass="w-full"
            />
          </div>
          <div>
            <label htmlFor="" className="flex gap-2 items-center">
              <button
                onClick={() => {
                  setConsent((consent) => !consent);
                  handleChange("consentGiven", consent);
                }}
                className={twMerge(
                  "flex justify-center items-center w-5 h-5 rounded-sm border-2 border-white",
                  consent === true ? "bg-PRIMARY" : "bg-gray-500"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-PRIMARY"
                  id="check"
                >
                  <path
                    // fill="#6563FF"
                    d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"
                  ></path>
                </svg>
              </button>
              <span className="font-montserrat text-white font-normal">
                Parents consent
              </span>
            </label>
            {formErrors.consentGiven && (
              <p className="my-1 text-red-500"> {formErrors.consentGiven}</p>
            )}
          </div>
          <div className="md:flex justify-between items-center  gap-5 md:gap-2 ">
            <Input
              inputProps={{
                placeholder: "Joe",
                value: formData.childFirstName,
                name: "childFirstName",
                onChange: (e) => handleChange("childFirstName", e.target.value),
              }}
              label="Child First Name"
              error={formErrors.childFirstName}
              containerClass="w-full"
            />
            <Input
              inputProps={{
                placeholder: "Doe",
                value: formData.childLastName,
                name: "childLastName",
                onChange: (e) => handleChange("childLastName", e.target.value),
              }}
              label="Child Last Name"
              error={formErrors.childLastName}
              containerClass="w-full"
            />
          </div>
          <div className="md:flex justify-between items-center gap-2 ">
            <Input
              inputProps={{
                placeholder: "Enter Age",
                value: formData.childsAge,
                name: "childsAge",
                type: "number",
                onChange: (e) =>
                  handleChange("childsAge", e.target.valueAsNumber),
              }}
              label="Child Age"
              error={formErrors.childsAge}
              containerClass="w-full"
            />

            <div className="w-full">
              <label
                htmlFor=""
                className="block mb-2 text-white text-base md:text-xl"
              >
                Gender
              </label>
              <div className="inline-block relative w-full">
                <select
                  className="block appearance-none w-full bg-PRIMARY border-2 border-white hover:border-gray-500 px-5 py-3 rounded-[10px] leading-tight text-white focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                  defaultValue={"Gender"}
                  onChange={(e) => handleChange("gender", e.target.value)}
                >
                  <option>Gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <p className="my-1 text-red-500">{formErrors.gender}</p>
            </div>
          </div>

          {/* old inputs */}
          <Input
            inputProps={{
              placeholder: "example@mail.com",
              value: formData.email,
              name: "email",
              onChange: (e) => handleChange("email", e.target.value),
            }}
            label="Email Address"
            error={formErrors.email}
          />

          <Input
            inputProps={{
              placeholder: "**********",
              type: "password",
              value: formData.password,
              name: "password",
              onChange: (e) => handleChange("password", e.target.value),
            }}
            label="Password"
            error={formErrors.password}
          />

          <Button
            className={twMerge(
              "transition-colors duration-200 bg-red-600 p-2 text-base md:p-4 hover:bg-red-800",
              !isFormValid && "bg-gray-500 hover:bg-gray-500 cursor-not-allowed"
            )}
            disabled={!isFormValid}
            onClick={() => mutation.mutate()}
          >
            Signup
          </Button>
        </div>
      </div>
      <p className="font-montserrat text-base md:text-xl text-[#AF9999] font-semibold">
        Already have an account?
        <a href="/signin" className="text-PRIMARY">
          Signin
        </a>
      </p>
    </AuthLayout>
  );
}
