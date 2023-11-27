import { useState } from "react";
import { Input } from "./components/form";
import { AuthLayout, Button } from "./components/ui";
import { useSignupValidation } from "./hooks";
import { twMerge } from "tailwind-merge";

export default function Signup() {
  const { formData, handleChange, formErrors, isFormValid } =
    useSignupValidation();

  const [consent, setConsent] = useState<boolean>(false);

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
                  !consent ? "bg-gray-400" : "bg-PRIMARY"
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
          <div className="md:flex justify-between items-center gap-2 ">
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
              label="Child First Name"
              error={formErrors.childLastName}
              containerClass="w-full"
            />
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
            disabled={isFormValid}
            onClick={() => {
              console.log("clicked");
            }}
          >
            Signup
          </Button>
        </div>
      </div>{" "}
      <p className="font-montserrat text-base md:text-xl text-[#AF9999] font-semibold">
        Already have an account?{" "}
        <a href="/signin" className="text-PRIMARY">
          Signin
        </a>
      </p>
    </AuthLayout>
  );
}
