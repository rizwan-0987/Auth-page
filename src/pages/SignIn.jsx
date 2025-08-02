import React from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import AuthForm from "../components/AuthForm/AuthForm";
import SocialLogins from "../components/SocialLogins/SocialLogins";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function SignIn() {
  const { loginWithRedirect } = useAuth0(); 

  const fields = [
    {
      label: "Username or Email Address",
      placeholder: "Enter your username or email",
      name: "username",
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
      title="Sign in"
      subtitle="No Account?"
      linkText="Sign up"
      linkTo="/signup"
    >
      <AuthForm
        fields={fields}
        buttonText="Sign in"
        extraLinks={<Link to="/forgot-password">Forgot Password</Link>}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Sign in submitted");
        }}
      />

      <SocialLogins
        providers={[
          {
            name: "Google",
            icon: "/auth_page/google.svg",
            onClick: () =>
              loginWithRedirect({
                connection: "google-oauth2",
                appState: { returnTo: "/profile" },
              }),
          },
          {
            name: "Facebook",
            icon: "/auth_page/Facebook.svg",
            onClick: () =>
              loginWithRedirect({
                connection: "facebook",
                appState: { returnTo: "/profile" },
              }),
          },
        ]}
      />
    </AuthLayout>
  );
}
