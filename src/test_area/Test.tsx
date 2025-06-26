import Synergy from "../components/Synergy/Synergy";

const Test = () => {
  return (
    <div className="flex justify-center">
        <div className=" w-1/2 h-[70px]">
          <Synergy  
            img_src="assets/about/skill_logo/java.png"
            rate={5}
            title="Java"

          />

        </div>

         {/* <div className="border-2 border-red-500 w-1/2">
          <Synergy  
            img_src="/vite.svg"
            rate={8}
            title="Vite"

          />

        </div> */}

        
 
    </div>
  );
};

export default Test;
