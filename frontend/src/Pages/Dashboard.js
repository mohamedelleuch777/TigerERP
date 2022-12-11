import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogin } from "../Hooks/useLogin";
// import './Login.css';

export default function Dashboard() {
  const { user } = useAuthContext();

//   useEffect(()=>{
//       if(user) {
        
//       }
//   },[user]);

  return (
     user && (


        <div className="container">
            <h1>this is dashboard page</h1>
        </div>
     )
  );
}
