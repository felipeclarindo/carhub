import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hub | Register",
  description: "Page for registering to Car Hub>",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
