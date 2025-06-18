import { useContext } from "react"
import Authcontext from "../Context/Authcontext"

const useAuth = ( ) =>{
    const context = useContext(Authcontext);
    return context;


}
export default useAuth;