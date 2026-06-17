import React from "react";
import userData from "@constants/data";

export default function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} forecho · {userData.address}</span>
      <span>{userData.email}</span>
    </footer>
  );
}
