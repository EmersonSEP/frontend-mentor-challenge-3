import imgDatabiz from "../../images/client-databiz.svg"
import imgAudio from "../../images/client-audiophile.svg"
import imgMaker from "../../images/client-maker.svg"
import imgMeet from "../../images/client-meet.svg"
export function Footer() {
  return (
    <div className="flex flex-row gap-2 items-center my-10 justify-center mb-24">
      <img className="ml-6 w-20" src={imgDatabiz}/>
      <img  className="mx-4 w-16" src={imgAudio}/>
      <img className="mx-4 w-20" src={imgMeet}/>
      <img  className="mr-6 w-20" src={imgMaker}/>

    </div>
  )
}