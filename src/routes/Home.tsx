import Particles from "../components/Particles/Particles";
import {COLOR} from "../utils/color_picker";
import FuzzyText from "../components/FuzzyText/FuzzyText";
import usekWindowSize from "../custom_hooks/useWindowSize";
import TrueFocus from "../components/TrueFocus/TrueFocus";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import StarBorder from "../components/StarBorder/StarBorder";
import CircularLogo from "../components/CircularLogo/CircularLogo";


const Home = () => {
    const windowSize = usekWindowSize();



    return(
        

            <div className="flex items-center flex-wrap">
                {/* Image*/}
                <div className="flex-[20%] h-[500px] xs:min-w-[300px] lg:min-w-[400px] xs:max-sm:px-[50px] xs:max-sm:pt-[50px]  sm:p-[10px] lg:p-[30px]">
                    <TiltedCard
                        imageSrc="/assets/me/me1.jpg"
                        containerHeight={"100%"}
                        containerWidth={"100%"}
                        imageWidth={'100%'}
                        imageHeight={"100%"}
                        showTooltip = {false}
                        
                    />
                </div>

                {/*Textt*/}
                <div className="flex-1/2 pb-10 h-[500px] xs:max-lg:h-auto xs:max-sm:w-full lg:max-2xl:mt-[80px] flex flex-col xs:mt-[20px]">

                    <div className="border-white">
                        <FuzzyText 
                            fontSize={windowSize > 768 ? 50 : 25}
                            baseIntensity={0.150} 
                            
                            
                        >
                            Hi I'm Lee Andrei.
                        </FuzzyText>

                    </div>

                    <div className="mt-2 border-white">
                        <FuzzyText 
                            fontSize={windowSize > 768 ? 50 : 25}
                            baseIntensity={0.150} 
                        >
                            I'm Unemployed
                        </FuzzyText>

                    </div>

                    <div className="mt-2 pl-15 pr-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo ratione a reiciendis delectus ullam id, totam vero aut, voluptate dolorum debitis eaque ipsa at illum tenetur, enim cum. Hic?
                    </div>

                    <div className="mt-5">
                        <TrueFocus
                            borderColor={COLOR["royal-purple"]}
                            sentence="Please Hire Me"
                            size={windowSize <= 768 ? 2: 3}
                            // size = {3}
                            


                        />
                    </div>

                    <div className="mt-7 flex justify-center">
                        <StarBorder
                            as = "button"
                            thickness= {2.5}
                            color={COLOR["royal-purple"]}
                            speed="2s"
                            className="hover:scale-110 ease-in-out duration-200"
                        >
                            VIEW MY WORKS
                        </StarBorder>
                    </div>

                    <div className="flex gap-5 mt-5 h-[50px] xs:max-md:justify-center md:max-2xl:ml-15 ">
                        <div className="w-[50px] h-full">
                            <CircularLogo 
                                src="/assets/github.svg"
                                border_size=".1em"
                                link="https://github.com/curLeeBrace"
                                padding={10}    
                            />
                        </div>

                        <div className="w-[50px] h-full">
                            <CircularLogo 
                                src="/assets/instagram.svg"
                                border_size=".1em"
                                padding={10}

                            />
                        </div>

                          <div className="w-[50px] h-full">
                            <CircularLogo 
                                src="/assets/fb.svg"
                                border_size=".1em"
                                link="https://web.facebook.com/curleebrace"
                                padding={10}

                            />
                        </div>

                        

                        {/* <>{windowSize}</> */}
                    </div>
    
                </div>
            </div>
            
    )
}


export default Home