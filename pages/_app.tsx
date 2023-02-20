import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion as m } from "framer-motion";
import { useRouter } from "next/router";
import NavBar from "@/components/navbar/NavBar";
import SphereCanvas from "@/components/canvas/SphereCanvas";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <m.div className="w-full h-[100vh] m-0 p-0 z-50 flex">
        <SphereCanvas />
      </m.div>

      <div className="absolute top-0">
        <NavBar />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </div>
    </>
  );
}
