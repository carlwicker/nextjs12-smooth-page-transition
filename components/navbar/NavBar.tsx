import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-2 flex gap-4 fixed w-full">
      <Link href={"/"}>Home</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}
