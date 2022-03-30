
import { useEffect, useState } from 'react';
import axios from 'axios';

function Company() {
  const [companyID, setcompanyID] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [address, setaddress] = useState("");
  const [chargeAmount, setchargeAmount] = useState("");
  const [vatCharge, setvatCharge] = useState("");
  const [message, setmessage] = useState("");
  const [companyPhone, setcompanyPhone] = useState("");



const updateCompany = (ID) => {
  axios.put('http://localhost:5010/update_company/${ID}', {
        companyName:companyName,
        address:address,
        companyPhone:companyPhone,
        chargeAmount:chargeAmount,
        vatCharge:vatCharge,
        message:message
    }
  )
}


    
  
  const [companyList, setcompanyList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_companys').then((response) => {
    setcompanyList(response.data);
    })
  })
  return (
    <div className="App">
    <h1>CRUD APP For Company</h1>
    
 <h2>company list</h2>
 {companyList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.company_ID}
     </h1>
     <h1>
     {val.company_name}
     </h1>
     <h1>
     {val.address}
     </h1>
     <h1>
     {val.charge_amount}
     </h1>
     <h1>
     {val.vat_charge}
     </h1>
     <h1>{val.message}</h1>
     <input type="text" placeholder='New Name...' onChange={(event)=> {
      setcompanyName(event.target.value);
    }}></input> 
    
    <input type="number" placeholder='New Phone...' onChange={(event)=> {
      setcompanyPhone(event.target.value);
    }}></input>

<input type="number" placeholder='New Charge Amount...' onChange={(event)=> {
      setchargeAmount(event.target.value);
    }}></input>
<input type="text" placeholder='New VAT...' onChange={(event)=> {
      setvatCharge(event.target.value);
    }}></input>   
    <input type="text" placeholder='New address...' onChange={(event)=> {
        setaddress(event.target.value);
      }}></input>
      <input type="text" placeholder='New Message...' onChange={(event)=> {
      setmessage(event.target.value);
    }}></input>
     <button onClick={() => updateCompany(val.company_ID)}>Update</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Company;