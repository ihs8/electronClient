
import { useEffect, useState } from 'react';
import axios from 'axios';

function Order() {
  const [orderID, setorderID] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [customerPhone, setcustomerPhone] = useState("");
  const [dateOfOrder, setdateOfOrder] = useState("");
  const [cti, setcti] = useState("");
  const [netAmount, setnetAmount] = useState("");
  const [status, setstatus] = useState("");
  const [orderName, setorderName] = useState("");
  const [neworderName, setneworderName] = useState("");
  const [newcustomerPhone, setnewcustomerPhone] = useState("");
  const [newstatus, setnewstatus] = useState("");

const updateOrder = (ID) => {
  axios.put('http://localhost:5010/update_order/${ID}', {
        neworderName:neworderName,
        newcustomerPhone:newcustomerPhone,
        newstatus:newstatus
    }
  )
}


  const addorder = () => {
    axios.post('http://localhost:5010/add_order',{
        orderID:orderID,
        orderName:orderName, 
        customerName:customerName, 
        customerPhone:customerPhone, 
        dateOfOrder:dateOfOrder,
        cti:cti,
        netAmount:netAmount,
        status:status

    });
    
  }
  const [orderList, setorderList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5010/get_orders').then((response) => {
    setorderList(response.data);
    })
  })
  const deleteOrder = (ID) => {
    axios.delete('http://localhost:5010/delete_order/${ID}')
  };
  return (
    <div className="App">
    <h1>CRUD APP For Orders</h1>
    <label>order ID</label>
    <input type="text" onChange={(event)=> {
      setorderID(event.target.value);
    }}></input>

<label>customer Name</label>
    <input type="text" onChange={(event)=> {
      setcustomerName(event.target.value);
    }}></input>

<label>customer phone</label>
    <input type="number" onChange={(event)=> {
      setcustomerPhone(event.target.value);
    }}></input>
    <label>Date of Order</label>
    <input type="date" onChange={(event)=> {
      setdateOfOrder(event.target.value);
    }}></input>
    <label>count total items</label>
    <input type="number" onChange={(event)=> {
      setcti(event.target.value);
    }}></input>
    <label>Net Amount</label>
    <input type="number" onChange={(event)=> {
      setnetAmount(event.target.value);
    }}></input>
    <label>status</label>
    <input type="text" onChange={(event)=> {
      setstatus(event.target.value);
    }}></input>

    <label>order Name</label>
    <input type="text" onChange={(event)=> {
      setorderName(event.target.value);
    }} ></input>
    <button onClick={addorder}>Add order</button>

 <h2>order list</h2>
 {orderList.map((val,key) => {
   return (
     <div key={key}>
     <h1>
     {val.order_name}
     </h1>
     <h1>
     {val.customer_name}
     </h1>
     <h1>
     {val.net_amount}
     </h1>
     <h1>
     {val.date_of_order}
     </h1>
     <h1>
     {val.status}
     </h1>
     <h1>{val.bill_no}</h1>
     <input type="text" placeholder='New Name...' onChange={(event)=> {
      setneworderName(event.target.value);
    }}></input> <input type="text" placeholder='New customer Phone...' onChange={(event)=> {
        setnewcustomerPhone(event.target.value);
      }}></input>
      <input type="text" placeholder='New Status...' onChange={(event)=> {
      setnewstatus(event.target.value);
    }}></input>
     <button onClick={() => updateOrder(val.bill_no)}>Update</button>
     <button onClick={() => deleteOrder(val.bill_no)}>Delete</button>
     </div>)
   }
 )}
    </div>
  );
}
export default Order;