// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo + Title (wrapped in Link) */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div>
            <div className="text-lg font-semibold text-[#2B2B2B]">Doctor Yourself</div>
            <div className="text-[11px] text-gray-600 leading-tight">
              Free from disease and disease phobia
            </div>
          </div>
        </Link>

        {/* Right: Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-800">
          <a href="/our-program" className="hover:text-[#8163A9] transition">Our Programs</a>
          <a href="/howwework" className="hover:text-[#8163A9] transition">How We Work</a>
          <a href="#team" className="hover:text-[#8163A9] transition">Our Team</a>
          <a href="/acutouch" className="hover:text-[#8163A9] transition">Acutouch</a>
          <a href="/about-us" className="hover:text-[#8163A9] transition">About Us</a>
          <a href="/contact-us" className="hover:text-[#8163A9] transition">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
