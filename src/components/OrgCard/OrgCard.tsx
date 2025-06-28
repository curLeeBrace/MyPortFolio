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
       <div className={`flex gap-5`}
        style={{
            width : width,
            height : height,
        }}
       >
            {/* LOGO */}
            <div className="flex-auto h-full  flex justify-center ">
                <CircularLogo
                    src={img_src}
                    border_none
                    size="100%"
                />
            </div>

            {/* DESCRIPTIONS */}
            <div className=" flex-[90%] min-w-0 flex flex-col  justify-center gap-2 mr-">
                <div className=" basis-0 font-semibold text-2xl">{title}</div>
                <div className="ml-[10px] basis-0  text-white/80 break-words whitespace-normal">{description}</div>
                <div className="ml-[10px] basis-0  text-white text">{other_description}</div>
            </div>


       </div>
    )
}

export default OrgCard