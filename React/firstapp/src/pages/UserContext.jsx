import { createContext } from "react";

const globalUser = createContext();
function userContext(){

    const [user, setUser] = useState({
        name:"ali",
        age:20
    })

return (
    <globalUser.Provider value={{name,age}}>

    </globalUser.Provider>
)
}
export default userContext