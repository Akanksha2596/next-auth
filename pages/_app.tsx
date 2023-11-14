import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"; //provider avoids page flicker ans uses network call , maintains sesion throuhout and behind the scene uses react context.
import Navbar from "../components/Navbar";
import "../components/Navbar.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}> 
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
