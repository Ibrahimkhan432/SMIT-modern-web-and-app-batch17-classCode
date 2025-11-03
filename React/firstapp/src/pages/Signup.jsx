import { useContext } from "react"
import userContext from "./UserContext"

function Signup(){

    const {name,age} = useContext(userContext)
    return (
        <div>
            
            <h1>Signup</h1>
            <h1>{user.name}</h1>
            <input type="text" placeholder="enter your name"/>
            <input type="email" placeholder="enter your email"/>
            <input type="password" placeholder="enter your password"/>
            <button>Signup</button>
            <p>already have account</p>
            <button>Login</button>
            {/* create a login div inside signup page use a conditional rendering usestate*/}
        </div>
    )
}
export default Signup