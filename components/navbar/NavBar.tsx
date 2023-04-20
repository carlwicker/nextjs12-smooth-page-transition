import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-5 gap-5 flex fixed z-40 uppercase font-semibold text-sm ">
      <Link href={"/"} className="bg-black p-2 hover:bg-red-400">
        Home
      </Link>
      <Link href={"/contact"} className="bg-black p-2 hover:bg-red-400">
        Contact
      </Link>
    </div>
  );
}
