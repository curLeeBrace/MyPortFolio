
import Synergy from "../../components/Synergy/Synergy";
import CircularLogo from "../../components/CircularLogo/CircularLogo";
import ShinyText from "../../components/ShinyText/ShinyText";
import Header from "../../components/Header/Header";


interface SkillInterface {
    img_src : string;
    title:string;
    rate : number;
}

const src_skill_logo = "/assets/about/skill_logo"


const skills:SkillInterface[] = [
    {
       img_src : `${src_skill_logo}/typescript.png`,
       rate : 8,
       title : "TypeScript" 
   },

   {
       img_src : `${src_skill_logo}/java.png`,
       rate : 7.5,
       title : "Java" 
   },

   {
       img_src : `${src_skill_logo}/python.png`,
       rate : 6.9,
       title : "Python" 
   },

    {
       img_src : `${src_skill_logo}/javascript.svg`,
       rate : 8,
       title : "JavaScript" 
   },

   {
       img_src : `${src_skill_logo}/react.svg`,
       rate : 7.8,
       title : "React" 
   },

    {
       img_src : `${src_skill_logo}/tailwind-css.svg`,
       rate : 7.5,
       title : "Tailwind" 
   },

    {
       img_src : `${src_skill_logo}/mysql-database.png`,
       rate : 8.3,
       title : "MySql" 
   },

   {
       img_src : `${src_skill_logo}/mongodb.svg`,
       rate : 7.7,
       title : "MonggoDB" 
   },

   {
       img_src : `${src_skill_logo}/Odoo.png`,
       rate : 7.2,
       title : "Odoo" 
   },
    {
       img_src : `${src_skill_logo}/sap.svg`,
       rate : 7.4,
       title : "SAP" 
   },
    {
        img_src : `${src_skill_logo}/html.png`,
        rate : 8,
        title : "HTML" 
    },

    {
        img_src : `${src_skill_logo}/css-3.png`,
        rate : 7,
        title : "CSS" 
    },

]





const Skills = () => {
    return (
        <>
        
            
            {/* Profile and Skills */}
            <div className="flex flex-wrap mt-[20px] px-[40px] gap-20">
                
                {/* My Picture */}
                <div className="lg:flex-[20%] xs:flex-[100%] xs:max-lg:items-center lg:min-w-[250px] flex flex-col">
                    <div className="xs:max-lg:max-w-[500px]">
                        <CircularLogo
                            src="/assets/me/me1.jpg"
                            size="100%"
                            // border_none
                          
                            
                        />
                    </div>

                    <div className="flex-auto">
                        <div className="flex">
                            <div className="shrink-0">
                                <CircularLogo
                                    src="/assets/about/icons/mail.png"
                                    size="50px"
                                    border_none
                                    padding={10}
                                />

                            </div>
                            <span className="align-baseline self-center text-white/70 z-10">leeandreiwork@gmail.com</span>
            
                        </div>

                       <div className="flex">
                            <div className="shrink-0">
                                <CircularLogo
                                    src="/assets/about/icons/pin.png"
                                    size="50px"
                                    border_none
                                    padding={10}
                                />

                            </div>
                            <span className="align-baseline self-center text-white/70 ">Pagsanjan, Laguna</span>
            
                        </div>
                    </div>
                    
                </div>

                {/* Synergy */}

                <div className="flex-[65%] flex flex-col ">


                    <div className="ml-[25px]">
                       <Header header_name="{Skills}"/>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-[15px] ">
                        {
                            skills.map((skill)=>(
                                <div className="flex-[33%] shrink-0 h-[70px] ">
                                    <Synergy
                                        img_src = {skill.img_src}
                                        rate = {skill.rate}
                                        title= {skill.title}   
                                        
                                    />
                                </div>
                            ))
                        }

                    </div>

               
                </div>


            </div>
        
        
        </>
    )
}



export default Skills