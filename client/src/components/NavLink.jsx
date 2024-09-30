// components/NavLink.js
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className, activeClassName, ...props }) => {
  const pathname = usePathname(); // Get the current path
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
