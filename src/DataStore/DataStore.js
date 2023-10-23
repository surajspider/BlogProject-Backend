import { createContext, useState, useEffect } from "react";

export const storeData = createContext();

function DataStore({ children }) {
    const [data, setData] = useState([]);
    const fetchfun = () => {
        return fetch("https://blogapp-backend-dataapi.onrender.com/api/allcatdata")
            .then((response) => response.json())
            .then((user) => setData(user))
    }
    useEffect(() => {
        fetchfun();
    }, [])
    return (
        <div>
            <storeData.Provider value={[data, setData]}>
                {children}
            </storeData.Provider>
        </div>
    )
}

export default DataStore

