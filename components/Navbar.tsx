import { navLinks } from "@/constants/data";
import { Logo } from ".";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-sm md:shadow-md lg:shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
      <div className="w-full md:max-w-screen-lg lg:max-w-screen-xl flex justify-between items-center mx-auto p-6">
        <Logo />
        <ul className="flex gap-3">
          {navLinks.map((navLink) => (
            <li key={navLink} className="text-md font-medium capitalize">
              {navLink}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}