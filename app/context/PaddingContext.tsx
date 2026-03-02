"use client"
import { createContext, useState } from "react";

const paddingContext = createContext({
    padding: "5px",
    setPadding: (padding: string) => {}
});



export default function PaddingContextProvider({ children }: { children: React.ReactNode }) {
    const [padding, setPadding] = useState("10px");

    return (
        <paddingContext.Provider value={{padding, setPadding}}>
            {children}
        </paddingContext.Provider>
    )
}