import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import { NextAuthProvider } from "../providers";
import react from "react";
import Right_comp from "../../components/Right_comp";
import { Toaster } from "@/components/ui/toaster";

export default function LogInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html className="relative overflow-hidden" suppressHydrationWarning>
        <body>
          <NextAuthProvider>
            <div className="w-screen bg-gray-300 flex min-h-screen">
              <div className="w-full bg-gray-100 m-12 ml-48 mr-48 rounded-3xl shadow-md overflow-hidden flex md:ml-24 md:mr-24">
                <div className="w-1/2 h-full ">{children}</div>
                <div className="w-1/2 h-full">
                  <Right_comp />
                </div>
              </div>
            </div>
            <Toaster />
          </NextAuthProvider>
        </body>
      </html>
    </>
  );
}
