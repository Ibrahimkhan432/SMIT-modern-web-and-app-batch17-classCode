import { useContext } from "react";
import { globalUser } from "./UserContext";

export default function AboutPage() {
    const {age} = useContext(globalUser)
    return (
        <>
            <h1>this is about page</h1>
            <h1>my age is {age} in about page</h1>
        </>
    );
}