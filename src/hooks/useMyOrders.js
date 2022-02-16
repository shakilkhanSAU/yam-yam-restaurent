import { useState } from "react";

const useMyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    // here fetch my orders from server and keep them in a state as array

    return {
        myOrders, setMyOrders
    }
}
export default useMyOrders;