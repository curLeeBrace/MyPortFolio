import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import OrgCard from "../../components/OrgCard/OrgCard";
import Header from "../../components/Header/Header";



const educaiton_info  = [{
    img_src:"/assets/about/university_logos/LU.png",
    title:"Laguna University",
    description:"Brgy Bubukal, Santa Cruz, Laguna",
    other_description:"2021 - 2025",
    height:"100%",
    width:"100%",
},
{

      img_src:"/assets/about/university_logos/acts.png",
      title:"ACTS Computer College",
      description:"Pedro Guevara Ave, Santa Cruz, Laguna",
      other_description:"2019 - 2021",
      height:"100%",
      width:"100%",

},
{

    img_src:"/assets/about/university_logos/pnhs.png",
    title:"Pagsanjan Integrated National High School",
    description:"Sitio Mayapa, Pagsanjan, Laguna",
    other_description:"2014 - 2019",
    height:"100%",
    width:"100%",

}
]













const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springSroll = useSpring(scrollYProgress);

  const height = useTransform(springSroll, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="relative h-auto flex mt-96 flex-col xs:px-[20px] xs:gap-5  lg:px-[50px] lg:gap-10"
      ref={ref}
    >
      <div className="self-center">
        <Header header_name="{Education}" />
      </div>



      <div className="flex gap-5 border-amber-300 mt-[20px]">

        <div className="flex-[35%] flex flex-col">
          {
            educaiton_info.map(({img_src, title, description, other_description, height, width}, index) => {
              if(index % 2 == 0){
                return(
                  <motion.div 
                      className=""


                      initial = {{
                          opacity : 0,
                          x : -40
                      }}

                      whileInView={{
                          opacity : 1,
                          x : 0,
                          transition : {
                              duration : 0.3,
                              delay : 0.1,
                              ease : "easeIn",
                          }
                      }}

                      viewport={{once:true}}
                  >
                    <OrgCard
                      img_src={img_src}
                      title= {title}
                      description= {description}
                      other_description= {other_description}
                      height={height}
                      width={width}
                    />
                  </motion.div>
                )
              } else {
                return(
                  <div className="h-[150px]"></div>
                )
              }
            })
          }

        </div>

        {/* ProgressBar */}

        <div className="w-[10px]">
          <motion.div
            className="relative w-[10px] h-96 rounded-b-full bg-[linear-gradient(to_bottom,_rgba(126,34,206,0)_0%,_rgba(126,34,206,0.6)_100%)]"
            style={{
              height: height,
            }}
          >
            <div className="absolute bottom-0  left-1/2 -translate-x-1/2 w-full aspect-square rounded-full shadow-[0px_0px_20px_15px_rgba(126,34,206)] bg-[rgb(156,93,211)] animate-pulse"></div>
          </motion.div>
        </div>


        <div className="flex-[35%] flex flex-col ml-[20px]">
            {
            educaiton_info.map(({img_src, title, description, other_description, height, width}, index) => {
              if(index % 2 == 1){
                return(
                  <motion.div 
                      initial = {{
                          opacity : 0,
                          x : 40
                      }}

                      whileInView={{
                          opacity : 1,
                          x : 0,
                          transition : {
                              duration : 0.3,
                              delay : 0.1,
                              ease : "easeIn",
                          }
                      }}

                      viewport={{once:true}}
                  >
                    <OrgCard
                      img_src={img_src}
                      title= {title}
                      description= {description}
                      other_description= {other_description}
                      height={height}
                      width={width}
                    />
                  </motion.div>
                )
              } else {
                return(
                  <div className="h-[150px]"></div>
                )
              }
            })
          }

        </div>
      </div>

    </div>
  );
};

export default Education;
