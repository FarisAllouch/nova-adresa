  import Hero from "../../components/hero";
  import Arhitecture from "../../components/arhitecture";
  import ImageSlider from "../../components/imageslider";
  import Distance from "../../components/distance";
  import Video from "../../components/video";
  import Contact from "../../components/contact";
  import Project from "@/components/project";

  import { getIzrada, getDolazak, getZavrseni } from "@/sanity/lib/queries";

  export default async function Home() {

    const u_izradi = await getIzrada();
    const u_dolasku = await getDolazak();
    const zavrseni = await getZavrseni();

    return (
      <>
        <Hero />

        <Project id="u-izradi" status={"u-izradi"} title = "U izradi" projects = {u_izradi}/>

        <Project id="u-dolasku" status={"u-dolasku"} title = "U dolasku" projects = {u_dolasku}/>

        <Project id="zavrseni" status={"zavrseni"} title = "Završeni" projects = {zavrseni}/>

        <Arhitecture />
      
        <ImageSlider />
      
        <Distance />

        <Video />

        <Contact />
      </>
    );  
  }