import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogin } from "../Hooks/useLogin";
// import './Login.css';

export default function ClientManagement() {
  const { user } = useAuthContext();

  // useEffect(()=>{
  //   debugger
  //     if(user) {
        
  //     }
  // },[]);

  return (
     user && (
        <div >
        hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
          hhhhhhhhhh
        </div>
     )
  );
}
