
import { motion } from "framer-motion"
import Header from "../../components/Header/Header"
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard"
import { RGB_COLOR } from "../../utils/color_picker"
import { useState } from "react"
import Modal from "../../components/Modal/Modal"



const base_url = "/assets/about/certificates"
const certificate_url : string[] = [
    `${base_url}/cert1.png`,
    `${base_url}/cert3.png`,
    `${base_url}/cert 3-1.png`,
    `${base_url}/cert 3-2.png`,
    `${base_url}/cert 3-3.png`,
    `${base_url}/cert 3-4.png`,
]




const Certificates = () => {

    const [show, setShow] = useState(false);
    const [certUrl, setCertUrl] = useState<string>("");
    
    return (
        <div className="flex flex-col  mb-[150px] mt-96 ">
            
        {
            show && <Modal setShow={setShow}>
                <SpotlightCard>
                    <img src={certUrl} className="object-contain "/>
                </SpotlightCard>
            </Modal>
        }


            <div className="self-center">
                <Header header_name="{Certificates}"/>
            </div>

            <div className="flex flex-wrap justify-around mt-[50px]">
                {
                    certificate_url.map((url, index) => (   
                        
                        <motion.div key={index} className="w-[40%] xs:min-w-[320px] lg:min-w-[500px] h-auto mt-[50px] cursor-pointer"
                            initial = {{
                                opacity : 0
                            }}

                            whileInView={{
                                opacity : 1,
                                transition : {
                                    ease : "easeIn",
                                    delay : 0.2,
                                    duration : 0.2
                                }
                            }}

                            onClick={()=>{
                                setShow((prev) => !prev)
                                setCertUrl(url)
                            }}
            
                        >
                            <SpotlightCard>
                                <img src={url} className="object-contain "/>
                            </SpotlightCard>
                        </motion.div>
                    ))
                }

            </div>





        </div>
    )
}



export default Certificates