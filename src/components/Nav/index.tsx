import { useState } from "react"; // import state
import { Drop, Drop2 } from "../Drop";
import { Select, Option } from "@material-tailwind/react";



export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="container flex items-center justify-between border-gray-300 mt-4 mb-6 lg:justify-start lg:gap-12 ">
      <a href="/">
<h1 className="text-4xl font-bold ml-4 lg:text-[40px] lg:ml-8">snap</h1>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-1.5 pr-4"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-800"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-800"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-4 py-4"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-10 w-10 text-gray-600"
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
            <div>
  
 
  
  </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col  ">
       
              <li className=" border-gray-400 my-2 mx-2 ">
              <button className="" >
            <Drop />
            </button>
    
              </li>
              <li className=" border-gray-400 my-2 mx-2 ">
              <button className="" >
            <Drop2 />
            </button>

              </li>
              <li className=" border-gray-400 my-2 mx-2 ">
                <a href="/contact">Careers</a>
              </li>
              <li className=" border-gray-400 my-2 mx-2 mb-10">
                <a href="/contact">About</a>
              </li>
     <li>

     <div className="flex flex-col items-center">
            <span className=" border-gray-400 mx-8 mb-4">
                <a href="/contact">Login</a>
              </span>
              <button className="border-2 border-black px-16 py-2 rounded-xl">Register</button>
            </div>
     </li>
            </ul>
    
    
          </div>

        </section>
<div className="lg:flex lg:justify-between">
<ul className="DESKTOP-MENU hidden space-x-8 lg:flex lg:justify-center lg:items-center">
          <li>
            <button className="" >
            <Drop />
            </button>


          </li>
          <li className="flex-col m-0">
              <button className="" >
            <Drop2 />
            </button>
          </li>
          <li>
            <a href="/contact">Careers</a>
          </li>
          <li>
            <a href="/contact">About</a>
          </li>
          <li>
          
<div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center ">
       <span className=" border-gray-400 mx-8 ">
           <a href="/contact">Login</a>
         </span>
         <button className="border-2 border-black px-16 py-2 rounded-xl">Register</button>
       </div>
</li>
        </ul>
</div>
        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 90%;
        height: 70vh;
        top: 0;
        left: 0;
        background: #e8e8e8;
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


