import CircularLogo from "../CircularLogo/CircularLogo";
interface OrgCardProps {
    title : string;
    img_src : string;
    description:string;
    other_description:string
    width?:string;
    height?:string;
}


const OrgCard = ({description, img_src, other_description, title, width = "500px", height = "125px"} : OrgCardProps)=>{
    return(
       <div className={`flex xs:max-lg:flex-wrap gap-1 `}
        style={{
            width : width,
            height : height,
        }}
       >
            {/* LOGO */}
            <div className="flex-auto w-[15%] min-w-[125px] flex justify-center xs:max-h-[100px] lg:max-h-[100%]">
                <CircularLogo
                    src={img_src}
                    border_none
                    size="100%"
                    
                    
                />
            </div>

            {/* DESCRIPTIONS */}
            <div className="flex-auto w-[70%] flex flex-col  justify-center gap-2 xs:max-lg:text-center">
                <div className=" basis-0 font-semibold xs:text-md md:text-2xl 2xl:text-4xl">{title}</div>
                <div className="ml-[8px] basis-0  text-white/80 break-words whitespace-normal">{description}</div>
                <div className=" basis-0  text-white xs:text-sm md:text-lg 2xl:text-2xl">{other_description}</div>
            </div>


       </div>
    )
}

export default OrgCard