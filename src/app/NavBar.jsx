import { NavLink } from "react-router-dom";

export default function NavBar() {
  const links = [
    { href: "/", label: "[ /home ]" },
    { href: "/blogs", label: "[ /blogs ]" },
    { href: "/projects", label: "[ /projects ]" },
    { href: "/contact", label: "[ /contact ]" },
  ];
  return (
    <nav>
      {links.map(({ href, label }) => (
        <NavLink
          key={href}
          to={href}
          end={href === "/"}
          className={({ isActive }) =>
            `nav-link${isActive ? " active" : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}