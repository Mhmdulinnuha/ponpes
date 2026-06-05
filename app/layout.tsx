
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import "./globals.css";
import "../assets/css/style.css";

import BootstrapClient from "./bootstrap-client";

export const metadata = {
  title: "adminHMD Dashboard",
  description: "Professional Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body>

        <BootstrapClient />

        {children}

      </body>

    </html>
  );
}

