import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import imgHero from "./images/image-hero-mobile.png"

function App() {
  return (
  <>
  <Nav />
<div className="">
<img src={imgHero}></img>

<div className="container justify-center text-center mt-12 flex-col ">
<p className="text-4xl font-bold mb-6">Make remote work</p>
<h3 className="w-screen text-xl leading-8 mb-4">Get your team in sync, no matter your location. Streamline processes. create team rituals, and watch productivity soar.</h3>
</div>
</div>
<div className="flex items-center justify-center">
  <button className="border-2 border-black px-6 py-2 rounded-xl bg-black text-white">Lear more</button>
</div>
<div>
  <Footer />
</div>
  </>
  )
}

export default App;
