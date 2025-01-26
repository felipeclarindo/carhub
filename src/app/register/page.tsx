"use client";

import { RegisterModal } from "@/components";

export default function Register() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <RegisterModal />
      </div>
    </div>
  );
}
