
import Synergy from "../../components/Synergy/Synergy";
import CircularLogo from "../../components/CircularLogo/CircularLogo";
import Header from "../../components/Header/Header";


interface SkillInterface {
    img_src : string;
    title:string;
    rate : number;
    years_ofExp : string;
}

const src_skill_logo = "/assets/about/skill_logo"


const skills:SkillInterface[] = [
    {
       img_src : `${src_skill_logo}/typescript.png`,
       rate : 8,
       title : "TypeScript", 
       years_ofExp : "1 year"
   },

   {
       img_src : `${src_skill_logo}/java.png`,
       rate : 7.5,
       title : "Java",
       years_ofExp : "3 years"
   },

   {
       img_src : `${src_skill_logo}/python.png`,
       rate : 6.9,
       title : "Python", 
       years_ofExp : "3 months"
   },

    {
       img_src : `${src_skill_logo}/javascript.svg`,
       rate : 8,
       title : "JavaScript",
       years_ofExp : "1 year"
   },

   {
       img_src : `${src_skill_logo}/react.svg`,
       rate : 7.8,
       title : "React", 
       years_ofExp : "2 years"
   },

    {
       img_src : `${src_skill_logo}/tailwind-css.svg`,
       rate : 7.5,
       title : "Tailwind", 
       years_ofExp : "2 years"
   },

    {
       img_src : `${src_skill_logo}/mysql-database.png`,
       rate : 8.3,
       title : "MySql", 
       years_ofExp : "3 years"
   },

   {
       img_src : `${src_skill_logo}/mongodb.svg`,
       rate : 7.7,
       title : "MonggoDB", 
       years_ofExp : "2 years"
   },

   {
       img_src : `${src_skill_logo}/Odoo.png`,
       rate : 7.2,
       title : "Odoo", 
       years_ofExp : "2 months"
   },
    {
       img_src : `${src_skill_logo}/sap.svg`,
       rate : 7.4,
       title : "SAP",
       years_ofExp : "2 months" 
   },
    {
        img_src : `${src_skill_logo}/html.png`,
        rate : 8,
        title : "HTML", 
        years_ofExp : "4 years"
    },

    {
        img_src : `${src_skill_logo}/css-3.png`,
        rate : 7,
        title : "CSS",
        years_ofExp : "4 years"
    },

]





const Skills = () => {
    return (
        <>
        
            
            {/* Profile and Skills */}
            <div className="flex flex-wrap mt-[90px] xs:px-[10px] sm:px-[40px] gap-20">
                
                {/* My Picture */}
                <div className="lg:flex-[20%] xs:flex-[100%] xs:max-lg:items-center lg:min-w-[350px] lg:items-center flex flex-col ">
                    <div className="lg:max-w-[600px] flex justify-center items-center">
                        <CircularLogo
                            src="/assets/me/me_shade.jpeg"
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


                    <div className="text-center mb-[10px] ">
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
                                        years_ofExp={skill.years_ofExp}
                                        
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