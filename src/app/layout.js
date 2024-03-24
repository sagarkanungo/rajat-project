'use client';
import { Inter } from "next/font/google";
import { usePathname} from "next/navigation";
import Header from '../Components/Header/Header'
import { Box } from "@mui/material";
import "./globals.css";
import ContextProvider from '../Components/context/ContextProvider'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}) {
  const pathName = usePathname();
  const shouldShowHeader = !pathName.includes("/dashboard");
  return (
    <html lang="en">
      <head>
        <title>
Website
        </title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        {/* <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        /> */}
      </head>
      <body >
        <ContextProvider>
        {shouldShowHeader && <Header />}
        <Box>
        {children}
        </Box>
        </ContextProvider>
      </body>
    </html>
  );
}
