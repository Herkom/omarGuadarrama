import { useEffect, useState } from "react";

import LogoForMobile from "@/components/logoForMobile";

const NavBar = ({isVisited}: {isVisited: boolean}) => {
  const [isOpenOrClosed, setIsOpenOrClosed] = useState(true);

  useEffect(() => {
    let isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.scrollTo(0, 1);
      setIsOpenOrClosed(false);
    }
  }, []);

  const openOrClose = () => {
    console.log("openOrClose fired")
    setIsOpenOrClosed(!isOpenOrClosed);

    if (isVisited === false) {
      isVisited = true;
      localStorage.setItem(`isVisited`, 'true');
    }
  };
  return (
    <header>
      <div className="logoOnlyForMobile">
        <LogoForMobile />
      </div>
      <div className={`menuIcon ${isOpenOrClosed ? 'beingTouched' : ""}`} onClick={openOrClose}>
        <section className="icon">
          <div className={`O ${isVisited ? 'borderHighlight' : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.64 35.64">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <rect
                    className="dot"
                    x="14.44"
                    y="16.43"
                    width="7.8"
                    height="9.44"
                  />
                  <path d="M14.26,0V5.94H7.13V29.7h7.13v5.94H0V0Z" />
                  <path d="M21.38,35.64V29.7h7.13V5.94H21.38V0H35.64V35.64Z" />
                </g>
              </g>
            </svg>
          </div>
          <div className={`G ${isVisited ? 'borderHighlight' : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.64 35.64">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon points="15.78 14.88 15.78 20.54 27.75 20.54 27.75 29.7 7.89 29.7 7.89 5.94 15.78 5.94 15.78 0 0 0 0 35.64 35.64 35.64 35.64 14.88 15.78 14.88" />
                </g>
              </g>
            </svg>
          </div>
        </section>
      </div>
      <nav id="navbar" className={`${isOpenOrClosed == false ? "hidden" : null }`}>
        <code className="menu">
          <ul>
            <li onClick={openOrClose}>
              <a href="#gallery">Portafolio</a>
            </li>
            <li onClick={openOrClose}>
              <a href="#resume">Resume/Contacto</a>
            </li>
            <li onClick={openOrClose}>
              <a href="#history">Historia</a>
            </li>
          </ul>
        </code>
        <div className="logo">
          <div className="nombre">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 2"
            >
              <path className="cls-1" d="M.68,0V.32H.33V1.68H.68V2H0V0Z" />
              <path className="cls-1" d="M.83,2V1.68h.34V.32H.83V0h.68V2Z" />
              <path
                className="cls-1"
                d="M3,.4a.38.38,0,0,1,.38.43v.68H3V.91c0-.1,0-.19-.16-.19a.22.22,0,0,0-.25.22v.57H2.35V.91c0-.11,0-.19-.16-.19A.22.22,0,0,0,2,.94v.57H1.67V.43H2V.61A.56.56,0,0,1,2.31.4a.4.4,0,0,1,.33.25A.45.45,0,0,1,3,.4Z"
              />
              <path
                className="cls-1"
                d="M4.38.43V.61A.51.51,0,0,0,4,.41.5.5,0,0,0,3.54,1,.5.5,0,0,0,4,1.53a.56.56,0,0,0,.36-.19v.17h.28V.43Zm-.09.74C4,1.43,3.69,1,3.92.77S4.52.94,4.29,1.17Z"
              />
              <path
                className="cls-1"
                d="M5.51.4h.06V.75a.6.6,0,0,0-.26,0,.32.32,0,0,0-.17.3v.42H4.86V.43h.28V.65A.45.45,0,0,1,5.51.4Z"
              />
            </svg>
          </div>
          <div className="apellido">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 2"
            >
              <polygon
                className="cls-1"
                points="1.25 0.83 1.25 1.15 1.69 1.15 1.69 1.68 1.02 1.68 1.02 0.32 1.27 0.32 1.27 0 0.69 0 0.69 2 2.02 2 2.02 0.83 1.25 0.83"
              />
              <path
                className="cls-1"
                d="M2.93.43h.28V1.51H2.93V1.33a.53.53,0,0,1-.36.2c-.25,0-.38-.16-.38-.42V.43h.33V1c0,.09,0,.19.17.19A.22.22,0,0,0,2.93,1Z"
              />
              <path
                className="cls-1"
                d="M5.56,0V.61a.55.55,0,0,0-.37-.2A.5.5,0,0,0,4.71,1a.5.5,0,0,0,.49.56.58.58,0,0,0,.36-.19v.17h.28V0Zm-.1,1.17c-.26.26-.6-.16-.37-.4S5.69.94,5.46,1.17Z"
              />
              <path
                className="cls-1"
                d="M4.24.43V.61a.55.55,0,0,0-.37-.2A.5.5,0,0,0,3.39,1a.51.51,0,0,0,.49.57.55.55,0,0,0,.35-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S4.37.94,4.14,1.17Z"
              />
              <path
                className="cls-1"
                d="M6.86.43V.61A.53.53,0,0,0,6.5.41.5.5,0,0,0,6,1a.51.51,0,0,0,.49.57.59.59,0,0,0,.36-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S7,.94,6.76,1.17Z"
              />
              <path
                className="cls-1"
                d="M9.85.43V.61a.51.51,0,0,0-.36-.2A.5.5,0,0,0,9,1a.51.51,0,0,0,.48.57.57.57,0,0,0,.36-.2v.17h.28V.43Zm-.1.74c-.25.26-.6-.16-.36-.4S10,.94,9.75,1.17Z"
              />
              <path
                className="cls-1"
                d="M13,.43V.61a.55.55,0,0,0-.37-.2.5.5,0,0,0-.48.56.51.51,0,0,0,.49.57.55.55,0,0,0,.35-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S13.17.94,12.94,1.17Z"
              />
              <path
                className="cls-1"
                d="M8,.41H8V.75a.55.55,0,0,0-.25,0,.31.31,0,0,0-.18.3v.42H7.33V.43h.28V.65A.47.47,0,0,1,8,.41Z"
              />
              <path
                className="cls-1"
                d="M8.83.41h.06V.75a.6.6,0,0,0-.26,0,.32.32,0,0,0-.17.3v.42H8.18V.43h.28V.65A.44.44,0,0,1,8.83.41Z"
              />
              <path
                className="cls-1"
                d="M11.64.41A.37.37,0,0,1,12,.83v.68h-.33V.91c0-.1,0-.19-.16-.19a.22.22,0,0,0-.24.22v.57H11V.91c0-.11,0-.19-.16-.19s-.25.07-.25.22v.57h-.28V.43h.28V.61A.55.55,0,0,1,11,.41a.39.39,0,0,1,.33.24A.44.44,0,0,1,11.64.41Z"
              />
            </svg>
          </div>
        </div>
        <code className="menu" id="social">
          <ul>
            <li onClick={openOrClose}>
              <a
                href="https://www.linkedin.com/in/omar-guadarrama"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  className="linkedIn"
                >
                  <path d="M9.29,0H.71A.71.71,0,0,0,0,.72V9.28A.71.71,0,0,0,.71,10H9.29A.71.71,0,0,0,10,9.28V.72A.71.71,0,0,0,9.29,0ZM3,8.57H1.54V3.8H3V8.57ZM2.28,3.15a.86.86,0,1,1,.86-.86A.87.87,0,0,1,2.28,3.15Zm6.3,5.42H7.1V6.25C7.1,5.7,7.08,5,6.33,5s-.89.61-.89,1.23V8.57H4V3.8H5.38v.65h0a1.55,1.55,0,0,1,1.4-.77c1.5,0,1.78,1,1.78,2.28Z" />
                </svg>
                <p>LinkedIn</p>
              </a>
            </li>
            <li onClick={openOrClose}>
              <a href="https://github.com/Herkom" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  className="github"
                >
                  <path d="M8.93,0H1.07A1.07,1.07,0,0,0,0,1.07V8.93A1.07,1.07,0,0,0,1.07,10H8.93A1.07,1.07,0,0,0,10,8.93V1.07A1.07,1.07,0,0,0,8.93,0ZM6.19,8.56c-.19,0-.26-.08-.26-.17s0-.74,0-1.24a.87.87,0,0,0-.25-.68c.82-.09,1.69-.21,1.69-1.64A1.16,1.16,0,0,0,7,4,1.34,1.34,0,0,0,7,3c-.31-.1-1,.4-1,.4A3.54,3.54,0,0,0,5,3.23a3.66,3.66,0,0,0-.93.13s-.71-.5-1-.4A1.37,1.37,0,0,0,3,4a1.13,1.13,0,0,0-.35.87c0,1.42.83,1.55,1.66,1.64A.76.76,0,0,0,4.1,7,.78.78,0,0,1,3,6.65a.78.78,0,0,0-.57-.38c-.36,0,0,.23,0,.23.24.11.41.54.41.54.22.66,1.25.44,1.25.44,0,.31,0,.81,0,.91s-.07.21-.26.17A3.7,3.7,0,0,1,1.33,5,3.54,3.54,0,0,1,5,1.43,3.62,3.62,0,0,1,8.66,5,3.67,3.67,0,0,1,6.19,8.56ZM4,7.2a.08.08,0,0,1-.09,0A.08.08,0,0,1,4,7.09s.08,0,.09,0A.08.08,0,0,1,4,7.2Zm-.21,0s0,.05-.08.05-.08,0-.08-.05,0,0,.08,0A.06.06,0,0,1,3.79,7.18Zm-.31,0s0,0-.09,0-.07-.05-.06-.08,0,0,.09,0,.07,0,.06.08ZM3.21,7s-.06,0-.1,0,0-.07,0-.09.06,0,.1,0S3.23,7,3.21,7ZM3,6.83s0,0-.08,0a.07.07,0,0,1,0-.09s.06,0,.08,0A.06.06,0,0,1,3,6.83Zm-.14-.21s0,0-.08,0,0-.06,0-.08.06,0,.08,0S2.88,6.6,2.86,6.62Zm-.15-.17a0,0,0,0,1-.06,0s0,0,0-.06a.08.08,0,0,1,.07,0S2.72,6.43,2.71,6.45Z" />
                </svg>
                <p>Github</p>
              </a>
            </li>
          </ul>
        </code>
      </nav>
    </header>
  );
};

export default NavBar;
