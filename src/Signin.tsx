import { twMerge } from "tailwind-merge";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { useAppContext } from "./context";
import { axiosInstance } from "./lib";
import { useFormValidation } from "./hooks";
import { Input } from "./components/form";
import { AuthLayout, Button, TwToast } from "./components/ui";

export default function Signin() {
  const [_, setState] = useAppContext();
  const { formData, handleChange, formErrors, isFormValid, validate } =
    useFormValidation();

  const mutation = useMutation({
    mutationFn: () => {
      validate();
      return axiosInstance.post("auth/signin", formData);
    },
    onSuccess: (data) => {
      toast.custom((t) => (
        <TwToast t={t} message="Signed in successfully" title="Success" />
      ));
      setState({
        auth_token: data.data.data.token,
      });
      window.location.assign("/home");
      // console.log(_);
    },
  });

  return (
    <AuthLayout>
      <div className="bg-PRIMARY rounded-[20px] py-8 px-4 md:px-10 mb-7 ">
        <p className="font-montserrat text-white text-xl">Login</p>

        <div className="grid gap-5 mt-6">
          <Input
            inputProps={{
              placeholder: "Enter username",
              value: formData.username,
              name: "username",
              onChange: (e) => handleChange("username", e.target.value),
            }}
            label="Username"
            error={formErrors.username}
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
              "transition-colors duration-200 bg-[#fff]  p-2 text-[#600000] md:p-4 hover:bg-red-800",
              !isFormValid && "bg-[#fff] hover:bg-gray-300"
            )}
            disabled={!isFormValid}
            onClick={() => mutation.mutate()}
          >
            Signin
          </Button>
        </div>
      </div>
      <p className="font-montserrat text-base md:text-xl text-[#914242] font-semibold">
        Don't have an account?{" "}
        <a href="/signup" className="text-PRIMARY">
          Signup
        </a>
      </p>
    </AuthLayout>
  );
}
