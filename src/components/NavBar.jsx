import { useEffect, useState } from "react";
import { FaReact, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const NavBar = () => {
  const [dark, setDark] = useState(false);

  function darkMode() {
    const root = document.querySelector("html");
    root.classList.remove("dark");
    if (dark) {
      root.classList.add("dark");
    }
  }

  useEffect(() => {
    darkMode();
  }, [dark]);

  return (
    <nav>
      <div className="logo">
        <FaReact />
      </div>
      <ul>
        <li className="theme-btn" onClick={() => setDark((prev) => !prev)}>
          {dark ? <BsFillSunFill /> : <BsMoonFill />}
        </li>

        <li>
          <a href="https://github.com/XshubhamG" target="_blank">
            <FaGithub />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/Codin_nerd" target="_blank">
            <FaTwitter />
          </a>
        </li>

        <li>Shubham Giri</li>

        <li className="profile-logo">
          <a href="#">SG</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
