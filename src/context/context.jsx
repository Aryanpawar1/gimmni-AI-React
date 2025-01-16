import React, { createContext, useState } from "react";
import run from "../components/config/gemmni";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

const delayPera = (index , nextWord)=> {
    setTimeout(function () {
        setResultData(prev =>prev+nextWord);
    } ,75*index)

}


const newChat = ( ) =>{
    setLoading(false)
    setShowResult(false)
}
    
    const onSent = async (prompt) => {
        setResultData(" ")
        setLoading(true)
        setShowResult(true)
        let response ;
         if (prompt !== undefined) {
            response =await run (prompt);
            setRecentPrompt( prompt)
         }
         else{
            setPrevPrompts(prev => [...prev,input])
            setRecentPrompt(input)
            response =await run(input)
         }

    //    setRecentPrompt(input)
    //   setPrevPrompts(prev =>[...prev,input])

    //      const response =await run (input)
    let responseArray = response.split("**");
    let newrespones=" " ;
    for(let i=0;i<responseArray.length;i++){
       if (i=== 0 || i%2 !== 1) {
        newrespones += responseArray[i];

       }
     else{
        newrespones += "<b>" + responseArray [i] + "</b>";
     }

    }


         let newrespones2 = newrespones.split("*").join("</br>")

         let newresponesArray = newrespones2.split(" ");
        
         for(let i=0; i<newresponesArray.length;i++){
            const nextWord =newresponesArray[i];
            delayPera(i,nextWord+" ")
         }

         setLoading(false)
         setInput(" ")
    };

    const ContextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    };

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;