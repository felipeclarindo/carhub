import { LoginModal } from "@/components";
import React from "react";

export default function Login() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <LoginModal />
      </div>
    </div>
  );
}
