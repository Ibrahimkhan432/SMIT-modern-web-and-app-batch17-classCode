import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function AboutPage() {
const {id} = useParams()
    return (
        <>
            <h1>About page with id {id}</h1>  
         <Outlet/>      
        </>
    );
}