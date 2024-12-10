import styles from "./slide2.module.css";
import useWindowSize from "../Hooks/useWindowSize";

const Slide3 = () => 
{
    const isDesktop = useWindowSize();
    return(
    <>
        <div>

        </div>
        <div>
            {isDesktop && (<video> </video>)}
            
        </div>
    
    </>);







}
export default Slide3;