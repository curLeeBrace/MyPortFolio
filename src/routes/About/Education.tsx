import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import OrgCard from "../../components/OrgCard/OrgCard";
import Header from "../../components/Header/Header";

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springSroll = useSpring(scrollYProgress);

  const height = useTransform(springSroll, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative h-auto  flex mt-52 flex-col px-[100px] gap-10" ref={ref}>
      <div className="self-center">
        <Header header_name="{Education}" />
      </div>

      <div className="flex  w-full pr-[50px]">

        <motion.div className="w-1/2 h-[150px] "
            initial = {{
                opacity : 0,
                x : -50
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

        
        >
          <OrgCard
            img_src="/assets/about/university_logos/LU.png"
            title="Laguna University"
            description="Brgy Bubukal, Santa Cruz, Laguna"
            other_description="2021 - 2025"
            height="100%"
            width="100%"
          />
        </motion.div>

      </div>







      <div className="flex w-full pl-[50px] justify-end">
        <motion.div className="w-1/2 h-[150px] "
            initial = {{
                opacity : 0,
                x : 50
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
        
        >
          <OrgCard
            img_src="/assets/about/university_logos/acts.png"
            title="ACTS Computer College"
            description="Pedro Guevara Ave, Santa Cruz, Laguna"
            other_description="2019 - 2021"
            height="100%"
            width="100%"
          />
        </motion.div>
      </div>

      <div className="flex  w-full pr-[50px]">
        <motion.div className="w-1/2  h-[150px]  shrink-0"
            initial = {{
                opacity : 0,
                x : -50
            }}

            whileInView={{
                opacity : 1,
                x : 0,
                transition : {
                    duration : 0.5,
                    delay : 0.3,
                    ease : "easeIn",
                }
            }}
        
        
        >
          <OrgCard
            img_src="/assets/about/university_logos/pnhs.png"
            title="Pagsanjan Integrated National High School"
            description="Sitio Mayapa, Pagsanjan, Laguna"
            other_description="2014 - 2019"
            height="100%"
            width="100%"
            
          />
        </motion.div>
      </div>

      {/* ProgressBar */}
      <div className="absolute mt-[75px] top-0 left-1/2 -translate-x-1/2 w-[10px] h-full">
        <motion.div
          className="relative w-[10px] h-96 rounded-b-full bg-[linear-gradient(to_bottom,_rgba(126,34,206,0)_0%,_rgba(126,34,206,0.6)_100%)]"
          style={{
            height: height,
          }}
        >
          <div className="absolute bottom-0  left-1/2 -translate-x-1/2 w-full aspect-square rounded-full shadow-[0px_0px_20px_15px_rgba(126,34,206)] bg-[rgb(156,93,211)] animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
