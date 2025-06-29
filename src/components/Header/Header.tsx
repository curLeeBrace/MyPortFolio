import ShinyText from "../ShinyText/ShinyText"

interface Headerprops {
    header_name : string;

}

const Header = ({header_name} : Headerprops) => {

    return (
       
            <ShinyText text={header_name} disabled={false} speed={5} className="bg-royal-purple text-[45px] font-bold"/>
    )

}

export default Header