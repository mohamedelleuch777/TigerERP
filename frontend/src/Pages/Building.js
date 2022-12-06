import { json } from "body-parser";
import { useEffect, useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogout } from "../Hooks/useLogout";


const Building = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [building, setBuilding] = useState([]);

    const getAllBuildings = async () => {
        let response = await fetch('http://localhost:5000/cms/building', {
            method: "GET",
            headers: {'Authorization': `Bearer ${user.token}`}
        });
        const jsonData = await response.json();

        if(!response.ok) {
            // logout();
            // window.location.pathname = '/login';
        }
        else {
            if(jsonData.success) {
                console.log(jsonData.data)
                setBuilding(jsonData.data);
            }
        }
    }

    useEffect(()=>{
        getAllBuildings();
    }, [])


    return <>
        { user && (
            <div>
                <h2>Building</h2>
                <ul>
                    { building && building.map((item) => {
                        return (
                            <li><div>{item._id}</div><div>{item.buildingName}</div></li>
                        )
                    })}
                </ul>
            </div>
        )}
    </>
}

export default Building;