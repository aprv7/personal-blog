"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "[ /home ]" },
    { href: "/blogs", label: "[ /blogs ]" },
    { href: "/projects", label: "[ /projects ]" },
    { href: "/contact", label: "[ /contact ]" },
  ];
  return (
    <nav>
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link${isActive ? " active" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}