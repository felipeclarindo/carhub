import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hub | Login",
  description: "Page for logging in to Car Hub.",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
