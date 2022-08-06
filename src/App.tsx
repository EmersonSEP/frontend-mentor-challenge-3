import { Button } from "./Button";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import imgHero from "./images/image-hero-mobile.png";
import imgMobile from "./images/image-hero-desktop.png"

function App() {
  return (
    <>
      <Nav />
      <div className="min-h-screen w-screen flex justify-center items-center flex-col lg:flex-row-reverse lg:px-28 lg:gap-16">

      <div className = 'hero-image-wrap'>
            <picture>
              <source media='(min-width: 1024px)' srcSet= {`${imgMobile}`}/>
              <source className="" media='(max-width: 1024px)' srcSet= {`${imgHero}`}/>
              <img src= {`${imgMobile}`} alt = 'hero-image'/>
            </picture>
          </div>

        {/* <img className="flex lg:px-20 lg:w-[780px] lg:h-[650px] lg:pb-50" src={imgHero}></img> */}
        <div className="flex flex-col text-center mt-12 lg:gap-8 ">
          <p className="text-4xl font-bold mb-4 lg:text-7xl lg:text-start 
          lg:ml lg:self-start lg:mr-[105px]">
            Make remote work
          </p>
          <h3 className=" text-base leading-7 mb-4 text-gray-500 px-3 lg:text-start 
          lg:ml lg:self-start lg:align-text-top lg:mr-36 ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </h3>

        <Button />

        <div className="">
          <Footer />
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
