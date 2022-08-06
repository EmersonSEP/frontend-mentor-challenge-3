import imgDatabiz from "../../images/client-databiz.svg"
import imgAudio from "../../images/client-audiophile.svg"
import imgMaker from "../../images/client-maker.svg"
import imgMeet from "../../images/client-meet.svg"
export function Footer() {
  return (
    <div className="flex flex-row gap-4 items-center my-10 justify-center  lg:justify-start lg:ml-2">
      <img className="w-20 lg:w-24" src={imgDatabiz}/>
      <img  className="w-14 lg:w-18" src={imgAudio}/>
      <img className="w-20 lg:w-24" src={imgMeet}/>
      <img  className="w-20 lg:w-24" src={imgMaker}/>

    </div>
  )
}