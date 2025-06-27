import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { ToastProvider } from "@/components/ui/toast";

export const metadata: Metadata = {
  title:
    "Dr. Reema Bhatt - Fetal Medicine Specialist | Amrita Hospital Faridabad",
  description:
    "Dr. Reema Bhatt - Senior Consultant & Head of Fetal Medicine at Amrita Hospital Faridabad. Specialized in invasive fetal procedures, genetic counseling, and high-risk pregnancies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <html lang="en" className="smooth-scroll">
        <body className="font-sans text-sm md:text-base">
          {children}
          <Toaster />
        </body>
      </html>
    </ToastProvider>
  );
}
