import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

function MainProvider({children}) {
    const [notice, setNotice] = useState();

    useEffect(()=>{
        try {
            axios.get("http://localhost:3000/data/mock.json")
            // axios.get("http://localhost:8080/")
            .then(res => {
                console.log(res.data);
                setNotice(res.data);
            })
        } catch(error) {
            console.log(error)
        }
    }, [])


    return (
        <MainContext.Provider value={notice}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;