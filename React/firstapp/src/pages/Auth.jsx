import { useState } from "react";

function AuthPage() {
  const [auth, setaAth] = useState("login");
  return (
    <div>
      {auth == "signup" ? (
        <div className="signup">
            <h1>Signup </h1>
            <input type="text" placeholder="enter your name" />
            <br />
            <input type="text" placeholder="enter your email" />
            <br />
            <input type="text" placeholder="enter your password" />
            <button type="button">Signup</button>
            <p>already have account</p>
            <button onClick={()=>setaAth("login")}>Login</button>
        </div>
      ) : (
         <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="enter your email" />
            <br />
            <input type="text" placeholder="enter your password" />
            <button type="button">Login</button>
            <p>don't have account</p>
            <button>Signup</button>
            </div>
      )}
    </div>


    // <div>

    //     {auth =="signup" && <div className="signup">Signup</div>}
    //     <div>login</div>
    // </div>
  );
}
export default AuthPage;
