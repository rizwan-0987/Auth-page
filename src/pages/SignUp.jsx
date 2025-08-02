import React from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import AuthForm from "../components/AuthForm/AuthForm";

export default function SignUp() {
  const fields = [
    {
      label: "Email Address",
      placeholder: "Enter your email address",
      name: "username",
    },
    {
      row: [
        {
          label: "Usename",
          placeholder: "Enter username",
          name: "name",
        },
        {
          label: "Contact Number",
          placeholder: "Enter contact number",
          name: "contact",
        },
      ],
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password",
    },
  ];

  return (
    <AuthLayout
      title="Sign up"
      subtitle="Have an Account?"
      linkText="Sign in"
      linkTo="/signin"
    >
      <AuthForm
        fields={fields}
        buttonText="Sign up"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Sign up submitted");
        }}
      />
    </AuthLayout>
  );
}
