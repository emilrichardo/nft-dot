import React, {useState, useEffect} from 'react';
import logo from "../assets/logo/logo.svg"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import { useTranslation } from "react-i18next"
const Header = () => {
  const {languages, originalPath} = useI18next();
  const {t} = useTranslation();

	const [scrolled, setScrolled] = useState(false);
    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
          }
        };

        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
          // clean up the event handler when the component unmounts
          document.removeEventListener('scroll', handleScroll);
        };
      }, [scrolled]);

    const[toggleMenu, setToggleMenu] = useState(false);

    const MenuToggleSwitch = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    return (
      <header>
        <nav>
          <div className={scrolled ? "navigation actives" : "navigation" }>
            <div>
              <div className="wrapper-logo">
                <a href="./" className="logo"><img alt='logo' src={logo}/></a>
                {languages.map((lng) => (
                    <Link to={originalPath} className="language" language={lng}>
                      {lng}
                    </Link>
                ))}
              </div>
              <div className="hamburguer" role="button" tabIndex="-1" aria-label="Menu" onClick={MenuToggleSwitch} onKeyDown={MenuToggleSwitch}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul  className={toggleMenu ? "nav active" : "nav"}>
                <li><a href='#one' className="scroll"  onClick={MenuToggleSwitch}>{ t("Menu_Home") }</a></li>
                <li><a href='#two' className="scroll"  onClick={MenuToggleSwitch}>{ t("Menu_About") }</a></li>
                <li><a href="#three" className="scroll"  onClick={MenuToggleSwitch}>{ t("RoadMap") }</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
    ;
}

export default Header;