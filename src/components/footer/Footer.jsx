import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content rounded-tl-[45px] rounded-bl-[25px] rounded-tr-[40px] rounded-br-[25px]">
      <aside className="">
        <Link to="/">
          <img className="h-[50px] flex items-center" src={logo} alt="" />
        </Link>

        <p>
          Khala Pina Restaurant Ltd.
          <br />
          Leading Restaurant since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">All Items</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Login</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
