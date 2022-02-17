import { useEffect, useState } from "react";

const useMyOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://young-wildwood-21988.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    return {
        allOrders, setAllOrders
    }

}
export default useMyOrders;










