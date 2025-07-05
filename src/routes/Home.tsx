
import {COLOR} from "../utils/color_picker";

import usekWindowSize from "../custom_hooks/useWindowSize";
import TrueFocus from "../components/TrueFocus/TrueFocus";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import StarBorder from "../components/StarBorder/StarBorder";
import CircularLogo from "../components/CircularLogo/CircularLogo";
import { useNavigate } from "react-router";


const Home = () => {
    const windowSize = usekWindowSize();
    const navigate = useNavigate();
    const handleOnClick = () => {

        navigate("/about-me")
    }

    return(
        

            <div className="flex items-center flex-wrap gap-20  xs:px-[20px] md:px-[50px] mt-[90px] ">
                {/* Image*/}
                <div className="flex-[30%] h-[450px] xs:min-w-[300px] sm:min-w-[500px]">
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
                <div className="flex-1/2 xs:max-lg:h-auto xs:max-sm:w-full flex flex-col justify-around  xl:pt-[50px]">

                    <div className="xs:text-3xl md:text-5xl">
                            Hi I'm Lee Andrei
                    
                    </div>

                    <div className="xs:text-3xl md:text-5xl">
                            I'm Unemployed
                    </div>



                    <div className="mt-[20px]">
                        I'm a recent graduate with a Bachelor's degree in Information Technology, specializing in System Development. I'm passionate about programming and continuously strive to enhance my skills.
                    </div>

                    <div className="mt-[20px]">
                        <TrueFocus
                            borderColor={COLOR["royal-purple"]}
                            sentence="Please Hire Me"
                            size={windowSize <= 768 ? 1.7: 2.5}
                            // size = {3}
                            


                        />
                    </div>

                    <div className="flex justify-center mt-[20px] ">
                        <StarBorder
                            as = "button"
                            thickness= {2.5}
                            color={COLOR["royal-purple"]}
                            speed="2s"
                            className="hover:scale-110 ease-in-out duration-200 xs:w-full sm:w-[45%]"
                            onClick={()=>handleOnClick()}
                        >
                            VIEW MY WORKS
                        </StarBorder>
                    </div>

                    <div className="flex gap-5 justify-center mt-[20px] pb-[20px]">
                        <div className="flex-1 xs:max-w-[60px] lg:max-w-[50px]">
                            <CircularLogo 
                                src="/assets/github.svg"
                                border_size=".1em"
                                link="https://github.com/curLeeBrace"
                                padding={10}    
                                size="100%"
                            />
                        </div>

                        <div className="flex-1 xs:max-w-[60px] lg:max-w-[50px] ">
                            <CircularLogo 
                                src="/assets/instagram.svg"
                                border_size=".1em"
                                padding={10}
                                size="100%"

                            />
                        </div>

                          <div className="flex-1 xs:max-w-[60px] lg:max-w-[50px]">
                            <CircularLogo 
                                src="/assets/fb.svg"
                                border_size=".1em"
                                link="https://web.facebook.com/curleebrace"
                                padding={10}
                                size="100%"

                            />
                        </div>

                        

                        {/* <>{windowSize}</> */}
                    </div>
    
                </div>
            </div>
            
    )
}


export default Home