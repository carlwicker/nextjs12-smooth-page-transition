import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-5 gap-5 flex fixed z-40">
      <Link href={"/"}>Home</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}
