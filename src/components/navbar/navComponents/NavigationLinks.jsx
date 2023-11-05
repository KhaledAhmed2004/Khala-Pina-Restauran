import { NavLink } from "react-router-dom";

// Navigation links for the menu
const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/allFoodItems", label: "All Food Items" },
  { to: "/blog", label: "Blog" },
];

const NavigationLinks = () => {
  return (
    <>
      {navigationLinks.map((link, index) => (
        <li className="hover:text-amber-600 dark:text-white" key={index}>
          {/* <NavLink to={link.to}>{link.label}</NavLink> */}
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? "text-[#f2a64d] underline underline-offset-2" : ""
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavigationLinks;
