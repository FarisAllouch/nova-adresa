import Hero from "../../components/hero";
import Arhitecture from "../../components/arhitecture";
import ImageSlider from "../../components/imageslider";
import Distance from "../../components/distance";
import Video from "../../components/video";
import Contact from "../../components/contact";
import Project from "@/components/project";

import { getStanovi } from "@/sanity/lib/queries";

export default async function Home() {

  const projects = await getStanovi();

  return (
    <>
      <Hero />

      <Project projects = {projects}/>

      <Arhitecture />
    
      <ImageSlider />
    
      <Distance />

      <Video />

      <Contact />
    </>
  );  
}