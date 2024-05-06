import { useState } from "react";
const AddDetails =() =>{
   
    const [inpRadio, setRadio]=useState('');
 
    let [inputAmout,setAmt]=useState('');
    let[inputPurp,setPurp]=useState('');
    const symb='₹';
    const inputP = event =>{
        setPurp(event.target.value);
    };


const inputIn =event =>{
        setAmt(event.target.value);
    }
const handleRadio = event =>{
    setRadio(event.target.value);
};
const changeValues=()=>{
    if(inpRadio=='expense'){
        setExpval(expenseValue=>expenseValue+parseInt(inputAmout));
        if (balAmt!=0){
        setBal(balAmt=>balAmt-parseInt(inputAmout));
        }
    }
    if(inpRadio=='budget'){
        setBudval(budgetValue=>budgetValue+parseInt(inputAmout));
        setBal(balAmt=>balAmt+parseInt(inputAmout));
    }
    

};

   
    
            return(
            
               <>
                   
            <input type='text' value={inputAmout} placeholder="enter the amount" onChange={inputIn}></input>
            <input type='text' value={inputPurp} placeholder="enter the purpose" onChange={inputP}></input>
            
            <label>
                    Expense
                    <input type='radio' name='action' value='expense'  checked={inpRadio=='expense'} onChange={handleRadio}></input>
                    Budget
                    <input type='radio' name='action' value='budget' checked={inpRadio=='budget'} onChange={handleRadio}></input>
                </label>
            <button onClick={changeValues}>Add Transaction</button>
            <h3>Balance:{symb}{balAmt}</h3>
         <button onClick={()=>setCont(!showCont)}>{showCont?'Cancel':'ADD'}</button>
          </>

        

        );
    };


export default AddDetails

