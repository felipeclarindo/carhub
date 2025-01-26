"use client";

import { MouseEvent } from "react";
import CustomButton from "../CustomButton";
import FieldEntry from "../FieldEntry";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();

  const buttonRegisterHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/register");
    console.log("Button Register Clicked");
  };
  return (
    <div className="flex flex-col items-center p-16 m-auto w-[20vw] h-[55vh] rounded-lg border-4 border-black">
      <h1 className="text-[40px] font-bold mb-6">Sign In</h1>

      <FieldEntry
        labelStyle="text-lg"
        inputStyle="border-2 border-black rounded-full py-1.5 pl-2.5"
        title="User"
        entryType="text"
        placeholder="Login here..."
      />
      <FieldEntry
        labelStyle="text-lg mt-1"
        inputStyle="border-2 border-black rounded-full py-1.5 pl-2.5"
        title="Password"
        entryType="password"
        placeholder="Password here..."
      />

      <div className="flex flex-row items-center justify-center w-[280px] h-8 mt-4 text-sm">
        <p>Already have an account?</p>
        <CustomButton
          title="Register"
          btnType="submit"
          textStyles="font-bold text-sm underline underline-offset-2 text-sm p-0 m-0 "
          containerStyles="p-0 ml-2 gap-0 max-w-2"
          handleClick={buttonRegisterHandleClick}
        />
      </div>

      <CustomButton
        title="Login"
        textStyles="text-black"
        containerStyles="w-[8em] bg-primary-blue rounded-full mt-4 transition-all ease-in-out duration-300 hover:opacity-80 hover:transform hover:scale-105"
      />
    </div>
  );
};

export default LoginModal;
