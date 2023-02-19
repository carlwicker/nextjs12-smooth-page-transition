import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NavBar from "@/components/navbar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </>
  );
}
