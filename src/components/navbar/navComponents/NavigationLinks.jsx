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
        <li className="hover:text-green-500" key={index}>
          <NavLink to={link.to}>{link.label}</NavLink>
        </li>
      ))}
    </>
  );
};

export default NavigationLinks;
