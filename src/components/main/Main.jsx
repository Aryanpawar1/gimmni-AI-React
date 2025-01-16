import React, { useContext } from "react";
import './Main.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
 
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    
  return (
   <div className="main">
    <div className="nav">
        <p>Gimini</p> 
        <img src={assets.user_icon} alt="" />
    </div>
<div className="main-conatiner">
    {!showResult 
     ?<>

     
    <div className="greet">
        <p><span> Hello, Aryan...</span></p>
        <p>How can I help you Guys?</p>
    </div>
    <div className="cards">
        <div className="card">
            <p>Lorem ipsum dolor, sit amet consecteturolore atque quos aperiam fuga.</p>
            <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
            <p>Lorem ipsum dolor, sit amet consecteturolore atque quos aperiam fuga.</p>
            <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
            <p>Lorem ipsum dolor, sit amet consecteturolore atque quos aperiam fuga.</p>
            <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
            <p>Lorem ipsum dolor, sit amet consecteturolore atque quos aperiam fuga.</p>
            <img src={assets.code_icon} alt="" />
        </div>
    </div>
    
      </>
      : <div  className='result'>
        <div className='result-tittle'>
            <img src={assets.user_icon} alt="" />
            <p>{ recentPrompt}</p>

        </div>
    <div className='result-data' >
        <img src={assets.gemini_icon} alt="" />
        {loading
        ? <div className ="loader"> 
        <hr />
        <hr />
        <hr />
        
        
        </div>
        : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
    }
       

    </div>


         
      </div>
        
    }






    <div className="div main-bottom">
        <div className="div searsh-box">
            <input onChange={(e)=>setInput(e.target.value)}  value ={ input}  type="text" placeholder="Enter prompt here" />
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
               { input?
               <img   onClick={()=>onSent( )}  src={assets.send_icon} alt="" />:null
               } 
            </div> 
        </div>
<p className="bottom-info">Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Recusandae autem eum incidunt nisi, dolores eos!</p>
    
    </div>
</div>


   </div>
  );
};

export default Main;



