import { useEffect, useState } from "react";



interface CircleLogo  {
  img_src : string;
  tooltip : string;
  img_link?: string;
}

interface MyWorksInterface {
  img_src : string;
  project_name :string;
  project_description :string;
  role : string;
  teck_stacks : CircleLogo[]
}




const MyWorks = () => {

  const [contributors, setContributors] = useState<CircleLogo>();
  
  const my_words:MyWorksInterface[] = [{
     img_src : "",
     project_name : "Online Ordering System",
     project_description : "Just a simple e-commerce website it has a features like   shopee. Made during our second year for final project",
     role : "Back-End",
     teck_stacks : [
      {
          img_src : "/assets/about/skill_logo/javascript.svg",
          tooltip : "JavaScript",

      },
      {
          img_src : "/assets/about/skill_logo/react.png",
          tooltip : "React",

      },
      {
          img_src : "/assets/about/skill_logo/tailwind-css.svg",
          tooltip : "Tailwind",

      },
      {
          img_src : "/assets/about/skill_logo/mongodb.svg",
          tooltip : "MongoDB",

      },
      {
          img_src : "/assets/about/skill_logo/express-js.svg",
          tooltip : "Express JS",

      },
      {
          img_src : "/assets/about/skill_logo/node-js.svg",
          tooltip : "Node JS",

      },

    ]
  },
  {
    img_src : "",
    project_name : "Green House Gas Inventory System",
    project_description : "This system is our capstone project. It was built to identify which areas in Laguna either municipalities or bgys are most exposed to greenhouse gas emissions (GHGe) by collecting data from residential and commercial sectors through surveys",
    role : "Full-Stack",
    teck_stacks : [
       {
          img_src : "/assets/about/skill_logo/typescript.png",
          tooltip : "TypeScript",

      },
      {
          img_src : "/assets/about/skill_logo/react.png",
          tooltip : "React",

      },
      {
          img_src : "/assets/about/skill_logo/vite.svg",
          tooltip : "Vite",

      },
      {
          img_src : "/assets/about/skill_logo/tailwind-css.svg",
          tooltip : "Tailwind",

      },
      {
          img_src : "/assets/about/skill_logo/mongodb.svg",
          tooltip : "MongoDB",

      },
      {
          img_src : "/assets/about/skill_logo/express-js.svg",
          tooltip : "Express JS",

      },
      {
          img_src : "/assets/about/skill_logo/node-js.svg",
          tooltip : "Node JS",

      },
    ]
  }


]





  // useEffect(() => {
  // fetch('https://api.github.com/repos/curLeeBrace/CapstoneRevamp/contributors')
  //   .then(res => res.json())
  //   .then(data => {
  //     setContributors(data)
  //     console.log(data)
  //   });
  // }, []);





  return (
    <div className="flex w-full border-2 border-amber-600">
    {/* Image/GIF */}
      <div className="flex-1/2 flex flex-colborder-2">
        {/* GIF */}
        <div></div>
        {/* Contributors - IMG*/}
        <div></div>
      </div>
    
    {/* Project Infos */}
      <div className="flex-1/2 border-2">
        {/* Header */}
        <div></div>
        {/* Description */}
        <p></p>

        {/* Role */}
        <div></div>

        {/* Tech/Tool Stacks */}
        <div></div>

        {/* Buttons */}
        <div></div>
      </div>
    </div>
  );
};

export default MyWorks;
