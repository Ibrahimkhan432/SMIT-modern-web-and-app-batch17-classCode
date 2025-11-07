import { useContext } from "react";
import { globalUser } from "./UserContext";
import AboutPage from "./About";
import LoginPage from "./Login";

function HomePge(){

   
    // const user = useContext(globalUser)
    // destructure object
    const {name,age}=useContext(globalUser)
    return(
        <div>
            <h1>Home Page</h1>
            <h1>my name is {name}</h1>
            <h1>my age is {age}</h1>
            {/* <AboutPage/>
            <LoginPage/> */}
        </div>
    )
}
export default HomePge;