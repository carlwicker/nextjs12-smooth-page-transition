import Head from "next/head";
import { motion as m } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
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
      <main>
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed left-0 top-0 right-0 bottom-0 -z-10"
        >
          <m.div className="h-[20vh] bg-blue-400" variants={item}></m.div>
          <m.div className="h-[20vh] bg-blue-500" variants={item}></m.div>
          <m.div className="h-[20vh] bg-blue-600" variants={item}></m.div>
          <m.div className="h-[20vh] bg-blue-700" variants={item}></m.div>
          <m.div className="h-[20vh] bg-blue-800" variants={item}></m.div>
        </m.div>
        <m.h1
          className="font-bold text-[250px]"
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
          exit={{ x: -50, opacity: 0, transition: { duration: 0.5 } }}
        >
          CONTACT
        </m.h1>
      </main>
    </>
  );
}
