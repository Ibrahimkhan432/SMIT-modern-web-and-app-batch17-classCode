import { createContext, useState } from "react";
import HomePge from "./Home";

export const globalUser = createContext();
function UserContext({ children }) {
  const [user, setUser] = useState({
    name: "ali",
    age: 20,
  });

  return (
    <globalUser.Provider value={user}>
    {children}
    </globalUser.Provider>
  );
}
export default UserContext;
