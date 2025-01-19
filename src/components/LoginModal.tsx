import React from "react";
import CustomButton from "./CustomButton";
import FieldEntry from "./FieldEntry";

function LoginModal() {
  return (
    <div className="flex flex-col items-center p-16 m-auto w-[20vw] h-[50vh] rounded-md border-2 border-black border-opacity-45">
      <h1 className="text-[40px] font-bold mb-4">Login</h1>

      <FieldEntry
        labelStyle="text-xl"
        inputStyle="border-2 border-black rounded-full py-1 pl-2"
        title="User"
        entryType="text"
        placeholder="Login here..."
      />
      <FieldEntry
        labelStyle="text-xl"
        inputStyle="border-2 border-black rounded-full py-1 pl-2"
        title="Password"
        entryType="password"
        placeholder="Password here..."
      />

      <CustomButton
        title="Login"
        textStyles="text-black"
        containerStyles="bg-primary-blue rounded-full mt-4"
      />
    </div>
  );
}

export default LoginModal;
