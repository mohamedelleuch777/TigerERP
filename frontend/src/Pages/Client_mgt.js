import { useState, useEffect } from "react";
import ItemDetail from "../Components/ItemDetail";
import { useAuthContext } from "../Hooks/useAuthContext";
import DataTable from 'react-data-table-component';
// import { use } from "../../../backend/API";
// import './Login.css';

export default function ClientManagement() {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState("");
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({
    code: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    province: "",
    country: "",
    postalCode: "",
    taxNumber: "",
    description: ""
  });

  const getClientistPage = async (index=0) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "pageIndex": index
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    try {
      const result = await fetch("http://localhost:5000/client", requestOptions);
      const data = await result.json();
      let newDataArray = [];
      data.data.forEach(element => {
        newDataArray.push({
          code: element.Id,
          fname: element.FirstName,
          lname: element.LastName,
          email: element.Email,
          phone: element.Phone,
          address: element.Address,
          district: element.District,
          province: element.Province,
          country: element.Country,
          postalCode: element.PostalCode,
          taxNumber: element.TaxNumber,
          description: element.Description
        });
      });
      setData(newDataArray);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  /**
  ################################################################################################ 
   */

  const clickHandler = (e) => {
    try {
      let row = e.target.parentElement;
      if(!row) return;
      while((row.id && row.id!=='' && !row.getAttribute("id").startsWith("row-")) || !row.id ) {
        row = row.parentElement;
        if(!row) return;
      }
      // console.log(row)
      setSelectedRow(row.id);
    } catch {
      
    }
  }

  useEffect( () => {
    // console.log(selectedRow);
    let style = document.querySelector("style#my-style");
    if(!style) return
    style.innerHTML = `
    #${selectedRow} {
      background-color: #c2c2c2;
      border-radius: 10px;
    }
    `;
    let index = parseInt(selectedRow.split("-")[1])
    setSelectedItem(data[index])
  },[selectedRow]);

  useEffect(()=>{
    let style = document.createElement("style");
    style.id = "my-style";
    document.querySelector("body").appendChild(style);
    document.querySelector('div.rdt_Table[role="table"]').addEventListener('click',clickHandler)
    user && getClientistPage();  
    return document.querySelector('div.rdt_Table[role="table"]').addEventListener('click',clickHandler)
  },[]);

  return (
     user && (
        <div style={{width: "100%", height: "100%"}}>
          <DataTable className="table--clients--list" title="Clients List" columns={col} data={data} pagination progressPending={isLoading}/>
          {
          (selectedItem && !isLoading) && 
          <div className="bottom-details">
            <div className="left">
              <ItemDetail label="Code client" value={selectedItem.code} />
              <ItemDetail label="First Name" value={selectedItem.fname} />
              <ItemDetail label="Last Name" value={selectedItem.lname} />
              <ItemDetail label="Email" value={selectedItem.email} />
              <ItemDetail label="Phone" value={selectedItem.phone} />
              <ItemDetail label="Description" value={selectedItem.description} />
            </div> 
            <div className="right">
              <ItemDetail label="Address" value={selectedItem.address} />
              <ItemDetail label="District" value={selectedItem.district} />
              <ItemDetail label="Province" value={selectedItem.province} />
              <ItemDetail label="Country" value={selectedItem.country} />
              <ItemDetail label="Postal code" value={selectedItem.postalCode} />
              <ItemDetail label="Taxe Number" value={selectedItem.taxNumber} />
            </div>
          </div>
          }
          Client information
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

