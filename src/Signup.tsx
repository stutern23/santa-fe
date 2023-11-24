import { Input } from "./components/form";
import { AuthLayout, Button } from "./components/ui";

export default function Signup() {
  return (
    <AuthLayout>
      <div className="bg-PRIMARY rounded-[20px] py-8 px-4 md:px-10 mb-7 ">
        <p className="font-montserrat text-white text-xl">Create an account</p>

        <div className="grid gap-5 mt-6">
          <Input
            inputProps={{ placeholder: "example@mail.com" }}
            label="Email Address"
          />

          <Input
            inputProps={{ placeholder: "**********", type: "password" }}
            label="Password"
          />

          <Button
            className="transition-colors duration-200 bg-red-600 p-2 text-base md:p-4 hover:bg-red-800"
            label="Signup"
          />
        </div>
      </div>
      <p className="font-montserrat text-base md:text-xl text-[#AF9999] font-semibold">
        Already have an account?{" "}
        <a href="/signin" className="text-PRIMARY">
          Signin
        </a>
      </p>
    </AuthLayout>
  );
}
