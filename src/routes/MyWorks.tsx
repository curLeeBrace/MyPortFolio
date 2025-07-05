import { useEffect, useState } from "react";
import CircularLogo from "../components/CircularLogo/CircularLogo";
import { Octokit } from "@octokit/core";
import StarBorder from "../components/StarBorder/StarBorder";
import { COLOR } from "../utils/color_picker";
import Modal from "../components/Modal/Modal";
import DialogBox, {type DialogBoxProps}from "../components/DialogBox/DialogBox";

interface CircleLogo {
  img_src: string;
  tooltip: string;
  img_link?: string;
}

// interface ContributorsInterface {
//   avatar_url: string;
//   html_url: string;
//   login: string;
// }

interface MyWorksInterface {
  gif_src: string;
  project_name: string;
  project_description: string;
  role: string;
  teck_stacks: CircleLogo[];
  repo_link:string;
  live_view_link:string;
  dialog_info? : DialogBoxProps

}



const MyWorks = () => {
  const [repo_contributors, setRepoContributors] = useState<any[][]>([]);
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });


  const [openModal, setOpenModal] = useState(false);
  const [dialog_info, setDialogInfo] = useState<DialogBoxProps>()
  const my_works: MyWorksInterface[] = [
  {
    gif_src: "/assets/portfolio/ghgi.gif",
    project_name: "Green House Gas Inventory System",
    project_description:
      "This system is our capstone project. It was built to identify which areas in Laguna either municipalities or brgys are most exposed to greenhouse gas emissions (GHGe) by collecting data from residential and commercial sectors through surveys",
    role: "Full-Stack",
    teck_stacks: [
      {
        img_src: "/assets/about/skill_logo/typescript.png",
        tooltip: "TypeScript",
      },
      {
        img_src: "/assets/about/skill_logo/react.svg",
        tooltip: "React",
      },
      {
        img_src: "/assets/about/skill_logo/vite.svg",
        tooltip: "Vite",
      },
      {
        img_src: "/assets/about/skill_logo/tailwind-css.svg",
        tooltip: "Tailwind",
      },
      {
        img_src: "/assets/about/skill_logo/mongodb.svg",
        tooltip: "MongoDB",
      },
      {
        img_src: "/assets/about/skill_logo/express-js.svg",
        tooltip: "Express JS",
      },
      {
        img_src: "/assets/about/skill_logo/node-js.svg",
        tooltip: "Node JS",
      },
    ],
    repo_link : "https://github.com/curLeeBrace/CapstoneRevamp",
    live_view_link : "https://ghgi-system.onrender.com",
    dialog_info : {
       dialog_title : "Please use this account for the testing",
       dialog_content :"Email : s-admin@gmail.com \n Password : 123456789",
       handleOnclick : ()=>{
          window.open(my_works[0].live_view_link, "_blank")
          setOpenModal(false)
       }
    }


  },
  {
    gif_src: "/assets/portfolio/oos.gif",
    project_name: "Online Ordering System",
    project_description:
      "Just a simple e-commerce website it has a features like   shopee. Made during our second year for final project",
    role: "Back-End",
    teck_stacks: [
      {
        img_src: "/assets/about/skill_logo/javascript.svg",
        tooltip: "JavaScript",
      },
      {
        img_src: "/assets/about/skill_logo/react.svg",
        tooltip: "React",
      },
      {
        img_src: "/assets/about/skill_logo/tailwind-css.svg",
        tooltip: "Tailwind",
      },
      {
        img_src: "/assets/about/skill_logo/mongodb.svg",
        tooltip: "MongoDB",
      },
      {
        img_src: "/assets/about/skill_logo/express-js.svg",
        tooltip: "Express JS",
      },
      {
        img_src: "/assets/about/skill_logo/node-js.svg",
        tooltip: "Node JS",
      },
    ],
    repo_link : "https://github.com/curLeeBrace/Online-Ordering-System",
    live_view_link :"https://online-ordering-system-hfw6.onrender.com",
     dialog_info : {
       dialog_title : "Please use this account for the testing",
       dialog_content :"Email : test@gmail.com \n Password : Testing1234",
       handleOnclick : ()=>{
          window.open(my_works[1].live_view_link, "_blank")
          setOpenModal(false)
       }
    }
  },
];




  const handleOnClick = (url:string, dialog_info?:DialogBoxProps) =>{

    if(dialog_info){
      setOpenModal(true);
      setDialogInfo(dialog_info)
        

    } else {
      window.open(url, "_blank");

    }


  }








  useEffect(() => {
    const fetchContributors = async () => {
    const urls = [
      "GET /repos/curleebrace/capstonerevamp/collaborators",
      "GET /repos/curleebrace/Online-Ordering-System/collaborators",
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) =>
          octokit.request(url, {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          })
        )
      );
      setRepoContributors(responses.map((res) => res.data));
    } catch (err) {
      console.error("Error fetching contributors:", err);
    }
  };

  fetchContributors();

  }, []);

  console.log("WTF" , repo_contributors)

  return (
    

    <div className="px-[20px] pb-[20px] flex flex-col gap-[90px] mt-[70px]">

      { openModal && dialog_info && 

        <Modal
          setShow={setOpenModal}
        >
            <DialogBox
              dialog_title= {dialog_info.dialog_title}
              dialog_content = {dialog_info.dialog_content}
              handleOnclick={dialog_info.handleOnclick}
            />
          
        </Modal>
        
      }
     
      
      {my_works.map((work, index) => (
        <div
          key={index}
          className="flex border-royal-purple gap-3 flex-wrap  border-2 p-[20px] rounded-lg"
        >
          {/* Image/GIF */}
          <div className="xs:w-full  xl:w-[45%] xl:min-w-[500px] flex flex-col gap-3">
            {/* GIF */}
            <div className="xs:h-[350px] xl:h-[85%] border-2 rounded-t-xl border-royal-purple/60 p-[10px]">
              <img src={work.gif_src} className="w-full h-full object-contain "/>

            </div>
            {/* Contributors - IMG*/}

            <div className="flex items-center gap-2 px-[10px] border-2 h-[15%] border-royal-purple/60 rounded-b-xl">
              <span className="font-semibold xl:text-lg text-nowrap text-white/60 ">{"Collaborators -> "}</span>

              <div className="flex justify-start flex-[60%] ml-[10px] gap-2">
                {repo_contributors.length > 0 && repo_contributors? (
                  repo_contributors[index].map((contributor, inner_index) => (
                    <div
                      key={`${index}${inner_index}`}
                      className={`xs:flex-1 xs:max-w-[35px] xl:w-[20%]`}
                      style={{
                       
                      }}
                    >
                      <CircularLogo
                        src={contributor.avatar_url}
                        tooltip={contributor.login}
                        link={contributor.html_url}
                        // border_none
                        border_size="2px"
                        
                        size="100%"
                      />
                    </div>
                  ))
                ) : (
                  <>Loding...</>
                )}
              </div>
            </div>
          </div>

          {/* Project Infos */}
          <div className="flex-[45%] shrink flex flex-col justify-around xs:gap-5 ">
            {/* Header */}
            <div className="text-3xl font-semibold  border-2  border-royal-purple/60 p-[10px] rounded-t-lg">{work.project_name}</div>
            {/* Description */}
            <p className="p-[10px] text-xl text-white/70 border-2  border-royal-purple/60 ">{work.project_description}</p>

            {/* Tech/Tool Stacks */}
            <div className="flex flex-wrap gap-2 px-[10px] items-center border-2  border-royal-purple/60 p-[10px]">
              <div className="font-semibold text-xl xs:max-xl:w-full ">{`Tech Stack - `}</div>
              {work.teck_stacks.map((tech_stack, inner_index)=>(
                    <div
                      key={`tech-${index}${inner_index}`}
                      className={`xs:min-w-[50px]`}
                      style={{
                        width: `${70 / 9}%`,
                      }}
                    >
                      <CircularLogo
                        src={tech_stack.img_src}
                        tooltip={tech_stack.tooltip}
                        padding={8}
                        // border_none
                        border_size="2px"
                        size="100%"
                      />
                    </div>
              ))}

            </div>

            {/* Role */}
            <div className="p-[10px] border-2  border-royal-purple/60 ">
              <span className="font-semibold text-xl">Role - </span>
              <span className = "text-lg">{work.role}</span>
            </div>


            {/* Buttons */}
            <div className="flex xs:gap-[20px] flex-wrap border-2  border-royal-purple/60 p-[10px] rounded-b-xl">
              
                  <StarBorder
                    as="button"
                    className="flex-1 cursor-pointer xs:text-sm xs:min-w-[150px]"
                    speed="3s"
                    thickness={3}
                    color={COLOR["royal-purple"]}
                    onClick={()=>handleOnClick(work.repo_link)}
                  >
                    View Github
                  </StarBorder>
      
                  <StarBorder
                    className="flex-1 cursor-pointer xs:text-sm xs:min-w-[150px]"
                    as="button"
                    speed="3s"
                    thickness={3}
                    color={COLOR["royal-purple"]}
                    onClick={()=>handleOnClick(work.live_view_link, work.dialog_info)}
                  >
                    Try it out
                  </StarBorder>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyWorks;
