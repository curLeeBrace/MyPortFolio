import GlowButton from "../components/GlowButton/GlowButton";
import StarBorder from "../components/StarBorder/StarBorder";

const Test = () => {
  return (
    <div className="flex justify-center">
        <div></div>
        <StarBorder
            as = "button"
            thickness= {2.5}
            color="cyan"
            speed="2s"
        >
            Yow

        </StarBorder>

  
    </div>
  );
};

export default Test;
