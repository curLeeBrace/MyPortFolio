import Synergy from "../components/Synergy/Synergy";
import CircularLogo from "../components/CircularLogo/CircularLogo";


interface SkillInterface {
    img_src : string;
    title:string;
    rate : number;
}

const src_skill_logo = "/assets/about/skill_logo"


const skills:SkillInterface[] = [
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
        img_src : `${src_skill_logo}/react.png`,
        rate : 7.8,
        title : "React" 
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
        img_src : `${src_skill_logo}/Odoo.svg`,
        rate : 7.2,
        title : "Odoo" 
    },
     {
        img_src : `${src_skill_logo}/sap.svg`,
        rate : 7.4,
        title : "SAP" 
    },
]


const About = () => {
    


    return(
        <div >
            <div className="h-auto flex gap-5">
                
                {/* My Picture */}
                <div className="flex-[30%] border-2 bg-purple-600">

                </div>

                {/* Synergy */}
                <div className="flex-[65%] flex border-2 border-amber-500">
                    <div className="flex flex-col">
                     
                    </div>  

                    <div className="flex flex-col">
              
                    </div>

                    <div className="flex flex-col">
                 
                    </div>
                </div>


            </div>
        </div>
    )
}


export default About
