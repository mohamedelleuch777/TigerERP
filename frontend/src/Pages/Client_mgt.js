import { useState, useEffect } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import DataTable from 'react-data-table-component';
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
        <div style={{width: "100%", height: "100%"}}>
          <DataTable title="Clients List" columns={col} data={data} pagination />
        </div>
     )
  );
}


const col = [

  {
      name: 'Client Code',
      selector: row => row.code,
  },
  {
    name: 'First Name',
    selector: row => row.fname,
},
{
  name: 'Last Name',
  selector: row => row.lname,
},
{
  name: "Email",
  selector: row => row.email,
},

{
  name: 'Phone',
  selector: row => row.phone,
},
{
  name: 'Address',
  selector: row => row.address,

},
{
  name: 'District',
  selector: row => row.district,
},
{
  name: 'Province',
  selector: row => row.province,
},
{
  name: 'Country',
  selector: row => row.country,
},
{
  name: 'Postal Code',
  selector: row => row.postalCode,
},
{
  name: 'Tax Number',
  selector: row => row.taxNumber,
},

{
  name: 'Description',
  selector: row => row.description,
}
];


const data = [
  {
    code: "234568",
    fname: "Mohamed",
    lname: "Elleuch",
    email: "usher7med@gmail.com",
    phone: "548687653",
    address: "safx route sa9ya",
    district: "sa9ya",
    province: "sfax",
    country: "tunisia",
    postalCode: "398764",
    taxNumber: "127364",
    description: "malade malade malade malade",

  }
]