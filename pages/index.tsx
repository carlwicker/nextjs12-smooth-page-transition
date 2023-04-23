import Head from "next/head";
import { motion as m } from "framer-motion";

export default function HomePage() {
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
        <title>Home: Page Transition Test</title>
        <meta name="description" content="Home: Page Transition Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-full h-[100vh] p-5 ">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex flex-col gap-20"
        >
          <div className="flex flex-col h-[100vh] justify-center">
            {/* <m.h1
              variants={item}
              className="font-bold text-[250px] -ml-[15px] select-none"
            >
              HOME
            </m.h1> */}
            <m.p
              variants={item}
              className="text-5xl sm:w-full xl:w-2/3 tracking-wide select-none"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              rerum neque reprehenderit dolorum dicta quod odio nemo soluta
              expedita nisi, accusantium.
            </m.p>
          </div>
          <m.div
            className="flex gap-20 text-2xl h-[100vh] align-middle justify-center"
            variants={item}
          >
            <div className="self-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus facere nesciunt commodi excepturi totam ut? Id
              dicta vero rem non? Debitis voluptates facere nulla?
            </div>
            <div className="text-5xl -rotate-3 font-extralight self-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus facere nesciunt commodi excepturi totam ut? Id
              dicta vero rem non? Debitis voluptates facere nulla?
            </div>
            <div className="self-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus facere nesciunt commodi excepturi totam ut? Id
              dicta vero rem non? Debitis voluptates facere nulla?
            </div>
          </m.div>

          <m.div className="flex gap-10">
            <div className="w-1/3"></div>
            <div className="text-2xl w-1/3 font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              veritatis perspiciatis sint nihil similique, molestiae illum vel
              nam. Praesentium sapiente quisquam minima, labore voluptate
              corporis, tempore possimus dolores aspernatur temporibus
              perspiciatis blanditiis? Expedita, fugiat commodi debitiss
              explicabo voluptate nostrum et obcaecati esse, facilis sapiente
              natus quasi nobis itaque a quis. Temporibus dolore est pariatur,
              fuga rem voluptates excepturi iure. Provident sint aliquam
              recusandae dolorem dolor obcaecati possimus iure quisquam labore
              dolorum nesciunt quidem, repellat sit consequatur, numquam velit
              in. Expedita, beatae facere eius dolore laborum deleniti quibusdam
              quae dolorum nobis eveniet enim facilis aut necessitatibus
              corrupti molestiae quis a vero repellendus fugiat iste rem?
              Tenetur facilis numquam quia nesciunt maxime perferendis tempore
              officia aliquid asperiores nihil ut odit possimus natus, saepe
              fugiat assumenda consequuntur culpa ipsa voluptas. Ab, architecto
              recusandae molestiae quae quidem at nemo minima eligendi
              voluptatum ducimus quam tempora nesciunt vel est explicabo dicta
              rem modi nostrum veniam. Hic quisquam numquam rerum ipsum
              temporibus ullam, tenetur totam tempore repudiandae quam. Nihil
              repellendus voluptate corporis asperiores odio esse alias saepe
              velit deserunt reiciendis consectetur in aliquid accusamus
              suscipit doloribus minus tempora tenetur voluptas, rem excepturi
              ullam facilis nam expedita? Deserunt earum error neque tenetur
              optio laboriosam, repellat omnis corporis.
            </div>
            <div className="w-1/3"></div>
          </m.div>
        </m.div>
      </main>
    </>
  );
}
