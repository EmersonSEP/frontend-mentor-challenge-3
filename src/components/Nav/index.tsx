import { useState } from "react"; // import state

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="container flex items-center justify-between border-b border-gray-400 py-8">
      <a href="/">
<h1 className="text-4xl font-bold ml-4">snap</h1>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mr-4">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">Features</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Company</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Careers</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">About</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">Features</a>
          </li>
          <li>
            <a href="/portfolio">Company</a>
          </li>
          <li>
            <a href="/contact">Careers</a>
          </li>
          <li>
            <a href="/contact">About</a>
          </li>
          
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}


