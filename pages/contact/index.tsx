import Head from "next/head";
import { motion as m } from "framer-motion";

export default function ContactPage() {
  const container = {
    hidden: { opacity: 0, x: 500 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 500,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Contact: Page Transition Test</title>
        <meta name="description" content="Contact: Page Transition Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-[100vh] p-5">
        <m.div variants={container} initial="hidden" animate="show" exit="exit">
          <m.h1
            variants={item}
            className="font-bold text-[250px] -ml-[15px] select-none"
          >
            CONTACT
          </m.h1>
          <m.p
            variants={item}
            className="text-5xl sm:w-full xl:w-2/3 tracking-wide select-none"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat et
            dolores libero dicta quod maxime eius, ut unde provident adipisci
            cum impedit est porro at omnis expedita, sunt nam perspiciatis?
          </m.p>
        </m.div>
      </main>
    </>
  );
}
