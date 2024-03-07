'use client';
import { Inter } from "next/font/google";
import Header from '../Components/Header/Header'
import { Box } from "@mui/material";
import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from '../theme'

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}) {
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
        <ThemeProvider theme={theme}>
      <Header/>
        <Box>
        {children}
        </Box>
        </ThemeProvider>

      </body>
    </html>
  );
}
