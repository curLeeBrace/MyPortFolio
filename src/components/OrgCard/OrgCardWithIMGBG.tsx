import OrgCard from "./OrgCard";

interface OrgCardWithIMGBGProps {
    bg_url : string;
    logo_url:string;
    title : string
    description : string
    other_description : string


}

const OrgCardWithIMGBG = ({bg_url = "/assets/about/org_photos/elyon_solution/elyon_team.jpg", logo_url = "/assets/about/org_photos/elyon_solution/elyon_solution.png",description, other_description, title} : OrgCardWithIMGBGProps) => {

  
  return (
    <div className="relative w-full h-full bg-royal-purple/30 rounded-2xl">
        <div className="absolute h-full w-full">
            <img
                src={bg_url}
                className=" w-full h-full object-cover"
                style={{
                    maskImage : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                    WebkitMaskImage : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                    
                
                }}
        
            />
        </div>
        <div className="absolute h-[35%] w-full mt-[15px] pl-[40px]">
            <OrgCard
                img_src={logo_url}
                title={title}
                description={description}
                other_description={other_description}
                height="100%"
                width="100%"

            />
        </div>
    </div>
  );
};

export default OrgCardWithIMGBG;
