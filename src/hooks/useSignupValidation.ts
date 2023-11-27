import { useEffect, useState } from "react";
import * as z from "zod";

interface Form {
  parentFirstName: string;
  parentLastName: string;
  consentGiven: boolean;
  childFirstName: string;
  childLastName: string;
  password: string;
  email: string;
}

export function useSignupValidation() {
  // Validation schemas
  const email = z.string().email("Invalid email address");
  const password = z
    .string()
    .refine(hasMinLen, {
      message: "Password must be at least 8 characters",
    })
    .refine(hasUpper, {
      message: "Password must have at least 1 uppercase letter",
    })
    .refine(hasSpecialChar, {
      message: "Password must have at least 1 special character",
    });

  const validationSchema: z.ZodType<Form> = z.object({
    parentFirstName: z.string().min(2, "First Name is required"),
    parentLastName: z.string().min(2, "Last Name is required"),
    email,
    password,
    childFirstName: z.string().min(2, "Childs First Name is required"),
    childLastName: z.string().min(2, "Childs Last Name is required"),
    consentGiven: z
      .boolean({})
      .refine((checked) => checked, { message: "Please check to consent" }),
  });

  const [formData, setFormData] = useState<Form>({
    parentFirstName: "",
    parentLastName: "",
    consentGiven: false,
    childFirstName: "",
    childLastName: "",
    password: "",
    email: "",
  });

  const [passwordRules, setpasswordRules] = useState({
    passHasMinLen: false,
    passHasUpper: false,
    passHasSpecialChar: false,
  });

  const [formErrors, setFormErrors] = useState<Partial<Form>>({});
  const [isFormValid, setIsFormValid] = useState<Record<keyof Form, boolean>>({
    childFirstName: false,
    childLastName: false,
    consentGiven: false,
    parentFirstName: false,
    parentLastName: false,
    email: false,
    password: false,
  });

  //   PASSWORD RULES HELPER FUNCTIONS
  function hasMinLen(value: string) {
    const hasMinLength = value.length >= 8;
    setpasswordRules((passRules) => ({
      ...passRules,
      passHasMinLen: hasMinLength,
    }));
    return hasMinLength;
  }

  function hasUpper(value: string) {
    const hasUppercase = /[A-Z]/.test(value);
    setpasswordRules((passRules) => ({
      ...passRules,
      passHasUpper: hasUppercase,
    }));
    return hasUppercase;
  }

  function hasSpecialChar(value: string) {
    const _hasSpecialChar = /[!@#$%^&*]/.test(value);
    setpasswordRules((passRules) => ({
      ...passRules,
      passHasSpecialChar: _hasSpecialChar,
    }));
    return _hasSpecialChar;
  }
  //  END PASSWORD RULES HELPER FUNCTIONS

  function validate() {
    try {
      validationSchema.parse(formData);
      setFormErrors({});
      Object.keys(formData).forEach((fieldName) =>
        setIsFormValid((fields) => ({ ...fields, [fieldName]: true }))
      );
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        let newErrors: Record<string | number, string> = {};
        error.issues.forEach((issue) => {
          newErrors[issue.path[0]] = issue.message;
        });

        setFormErrors(newErrors);

        setIsFormValid((prev) => {
          let newValid: Record<string, boolean> = { ...prev };
          Object.keys(newErrors).forEach((field) => {
            newValid[field] = false;
          });
          return newValid;
        });
      }
    }
  }
  const handleChange = <T = string>(key: keyof Form, value: T) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  useEffect(() => {
    validate();
  }, [formData]);

  return {
    formData,
    formErrors,
    isFormValid: Object.values(isFormValid).every((valid) => valid),
    passwordRules,
    handleChange,
    validate,
  };
}
