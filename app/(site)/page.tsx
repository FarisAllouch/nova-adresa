"use client";

import Hero from "../../components/hero";
import Arhitecture from "../../components/arhitecture";
import ImageSlider from "../../components/imageslider";
import Distance from "../../components/distance";
import Video from "../../components/video";
import Contact from "../../components/contact";
import PropertiesHero from "@/components/propertieshero";

export default function Home() {

  return (
    <>
      <Hero />

      <PropertiesHero />

      <Arhitecture />
    
      <ImageSlider />
    
      <Distance />

      <Video />

      <Contact />
    </>
  );  
}