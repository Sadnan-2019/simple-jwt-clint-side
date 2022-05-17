import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders`, {
      method: "GET",
          headers:{

                    authorization:`Bearer ${localStorage.getItem("accessToken")}`
          }
    }).then(res=>{

      if(res.status === 401 || res.status === 403){
        navigate("/login")
      }
     return res.json()
    
    })
    .then(data=>{

          console.log(data)
          setOrders(data)
    })
  }, []);
  return (
    <div>
      <h3>This is orders:::::::{orders.length}</h3>
    </div>
  );
};

export default Orders;
