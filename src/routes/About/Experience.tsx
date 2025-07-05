import OrgCardWithIMGBG from "../../components/OrgCard/OrgCardWithIMGBG"
import Header from "../../components/Header/Header"
import { motion } from "framer-motion"

const orgs_info = [{
    bg_url : "/assets/about/org_photos/elyon_solution/elyon_team.jpg",
    logo_url:"/assets/about/org_photos/elyon_solution/elyon_solution.png",
    title : "Elyon Solutions International inc",
    description : "Position : IT Consultant (Intern)",
    other_description : "Work Experience : 4-Months"
},]

const Experience = () =>{
    return(
        <div className="flex flex-col mt-96 xs:p-[20px] sm:px-[50px]">
            <div className="self-center">
                <Header header_name="{Experience}"/>
            </div>

           {
                orgs_info.map(({bg_url, description, logo_url, other_description, title}, index)=>(
                    <motion.div key = {index} className="w-full h-[500px] mt-[50px]"
                        initial = {{
                            opacity : 0
                        }}    

                        whileInView={{
                            opacity : 1,
                            transition:{
                                delay : 0.2,
                                ease : "easeIn"
                            }
                        }}
                    
                    
                    >
                        <OrgCardWithIMGBG
                            bg_url={bg_url}
                            description={description}
                            logo_url={logo_url}
                            other_description={other_description}
                            title={title}
                            
                        />

                    </motion.div>
                ))
           }


        </div>
    )
}


export default Experience