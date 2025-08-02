import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return <p style={{ padding: "2rem" }}>You are not logged in.</p>;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <img
        src={user.picture}
        alt={user.name}
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
      <h2>Welcome, {user.name}</h2>
      <p>{user.email}</p>

      <button
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1.2rem",
          background: "#d68a00",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </div>
  );
}
