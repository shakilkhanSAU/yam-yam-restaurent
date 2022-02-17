import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useMyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    useEffect(() => {
        const url = `https://young-wildwood-21988.herokuapp.com/myorder/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [email]);
    return {
        myOrders, setMyOrders
    }
}
export default useMyOrders;