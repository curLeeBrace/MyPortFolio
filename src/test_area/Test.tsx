import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import Modal from "../components/Modal/Modal";
import { useState } from "react";



const base_url = "/assets/about/certificates"
const certificate_url : string[] = [
    `${base_url}/cert1.png`,
    `${base_url}/cert3.png`,
    `${base_url}/cert 3-1.png`,
    `${base_url}/cert 3-2.png`,
    `${base_url}/cert 3-3.png`,
    `${base_url}/cert 3-4.png`,
]


const Test = () => {
  const [show, setShow] = useState(false);
  const [certUrl, setCertUrl] = useState<string>("");



  return (
    <div className="flex justify-center">

      {
        show && <Modal setShow={setShow}>
            <SpotlightCard>
                  <img src={certUrl} className="object-contain "/>
              </SpotlightCard>
        </Modal>
      }
  

      <div className="flex flex-wrap justify-around">
        {
          certificate_url.map((url, index)=>(

            <div key={index} className="w-[40%] min-w-[500px] h-auto mt-[50px]"
              onClick={()=>{
                setShow((prev) => !prev)
                setCertUrl(url)
              }}
            
            >
                
              <SpotlightCard>
                  <img src={url} className="object-contain "/>
              </SpotlightCard>

            </div>
          ))
        }

      </div>







      
    </div>
  );
};

export default Test;
