import { useEffect, useState } from "react";
import * as z from "zod";
import { validationError } from "../utils";

interface Form {
  email: string;
  password: string;
}

export const useFormValidation = () => {
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

  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
  });

  const [passwordRules, setpasswordRules] = useState({
    passHasMinLen: false,
    passHasUpper: false,
    passHasSpecialChar: false,
  });

  const [formErrors, setFormErrors] = useState<Partial<Form>>({});
  const [isFormValid, setIsFormValid] = useState({
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

  const validateEmail = () => {
    try {
      email.parse(formData.email);
      setFormErrors({});
      setIsFormValid((prev) => ({ ...prev, email: true }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        validationError<Form>("email", error, (errors) => {
          setFormErrors((_errors) => ({ ..._errors, email: errors["email"] }));
          setIsFormValid((prev) => ({ ...prev, email: false }));
        });
      }
    }
  };

  const validatePassword = () => {
    try {
      password.parse(formData.password);
      setFormErrors({});
      setIsFormValid((prev) => ({ ...prev, password: true }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        validationError<Form>("password", error, (errors) => {
          setFormErrors((_errors) => ({
            ..._errors,
            password: errors["password"],
          }));
          setIsFormValid((prev) => ({ ...prev, password: false }));
        });
      }
    }
  };

  function validate() {
    validateEmail();
    validatePassword();
  }

  const handleChange = (key: keyof Form, value: string) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  useEffect(() => {
    validateEmail();
    validatePassword();
  }, [formData]);

  return {
    formData,
    formErrors,
    isFormValid: Object.values(isFormValid).every((valid) => valid),
    validateEmail,
    validatePassword,
    passwordRules,
    handleChange,
    validate,
  };
};
