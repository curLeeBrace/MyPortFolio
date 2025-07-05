import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {useRef } from "react";

const BarProgression = () => {
  const ref = useRef(null)

  const {scrollYProgress} = useScroll({ target: ref, offset: ["start end", "end start"] })
  useMotionValueEvent(scrollYProgress, "change", (lates)=>{
    console.log(lates)
  } )

  const height = useTransform(scrollYProgress, [0,0.7], ["0%","100%"])


  return (
    <div ref={ref} className="h-96">
        <motion.div
          className="w-20 border-2 bg-blue-900"
          style={{
            // scaleY : scrollY,

            // backgroundColor : "black",
            height : height,
            originX: 0
          }}
        />

    </div>
  );
};

export default BarProgression;
