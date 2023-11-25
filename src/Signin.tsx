import { twMerge } from "tailwind-merge";
import { useFormValidation } from "./hooks";
import { Input } from "./components/form";
import { AuthLayout, Button } from "./components/ui";

export default function Signin() {
  const { formData, handleChange, formErrors, isFormValid } =
    useFormValidation();

  return (
    <AuthLayout>
      <div className="bg-PRIMARY rounded-[20px] py-8 px-4 md:px-10 mb-7 ">
        <p className="font-montserrat text-white text-xl">Login</p>

        <div className="grid gap-5 mt-6">
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
              !isFormValid && "bg-gray-500"
            )}
            label="Signup"
            disabled={isFormValid}
            onClick={() => {}}
          />
        </div>
      </div>
      <p className="font-montserrat text-base md:text-xl text-[#AF9999] font-semibold">
        Don't have an account?{" "}
        <a href="/signup" className="text-PRIMARY">
          Signup
        </a>
      </p>
    </AuthLayout>
  );
}
