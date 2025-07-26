import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-8">
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">/home</Link>
        <Link href="/about" className="hover:underline">/about</Link>
      </nav>
    </header>
  );
};

export default Header;

