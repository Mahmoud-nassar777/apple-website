import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { rightImg, watchImg } from "../utils"
import VideoCareousel from "./VideoCarousel"


const Highligts = () => {

  useGSAP(() => {
    gsap.to( '#title', {
      opacity: 1,
      y: 0,
    })
    gsap.to( '.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    })

  }, [])



  return (
    <section id="highlights" className=" w-screen overflow-hidden h-full common-padding bg-zinc "  >
      <div className="screen-max-width" >
        <div className="mb-12 w-full md:flex items-end justify-between" >
          <h1 id="title" className="section-heading" >  Get the hoghlights. </h1>
          <div className="flex flex-wrap gap-5 items-end ">
            <p className="link" > 
              watch the film 
              <img src={watchImg} alt="watchImg" className="ml-2" />
            </p>
            <p className="link" > 
              watch the event 
              <img src={rightImg} alt="rightImg" className="ml-2" />
            </p>
          </div>
        </div>
      </div>

      <VideoCareousel />
    </section>
  )
}

export default Highligts