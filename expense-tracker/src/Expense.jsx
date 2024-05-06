import { useCallback, useState } from "react";
import styled from "styled-components";
// import AddDetails  from "./Useinput.jsx";


const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin:10px;
width: 100%;
border:none;
max-width:50vw;
min-height:60vh;
margin:5vh auto;
background-color: #E5989B;
border-radius:10px; 
box-shadow: 0 0 10px black;
font-size: 20px;



`;



const Bal=styled.div`
font-size:20px;
font-weight:bold;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
button{
    background-color: black;
color:white;
padding:5px 10px;
margin:10px;
border-radius: 10px;
font-size: 20px;
}
`;




const Container2=styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
margin:10px;
gap:20px;
border:.5px;
/* input{
    background: transparent;
    border:none;
    outline: none;
    width:40%;
    height:30%;
    padding:20px;
} */
`;

// const Container3=styled.div`
// display:flex;
// flex-direction: column;
// justify-content: center;
// margin:10px;
// padding:20px;
// input{
//     padding:5px;
//     width:100%;
//     border-radius: 10px;
//     border:1px solid red;
   
// }
    

// `;
const StDetails=styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    input{
        padding:5px;
        border:none;
        outline-color:yellow;
        border-radius:5px;
        background-color: aliceblue;
    }
     input [type='radio']{
        display:flex;
        flex-direction:row;
    }
    button{
        background-color: #51c851;
        border:none;
        outline:none;
        padding:10px;
        border-radius:5px;
    }
`;


const ExpenseDisp =styled.div `

    display:flex;
    flex-direction:column;
    justify-content:left;
    border:none;
    min-width: 50%;
    max-height: 10%;



`;
const BudgetDisp =styled.div `

    display:flex;
    flex-direction:column;
    justify-content:right;
    border:none;

    `;

const ListCont=styled.div`

    margin-top: 20px;
    width:50%;
    padding: 10px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    button{
        background-color: #8ce08c;
        border: none;
        border-radius: 5px;
        min-width:30%;
        
        padding:10px;
        height:40px;
        
        
    }
    text-align: center;
    
    `;
const ListItem=styled.div`
    display :flex ;
    flex-direction: row;
    justify-content: space-between;
    gap:10px;
     background-color: #ffffff;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    


`;

/*----------------------------------------------------------------------------------*/

const AddD =() =>{
   
    const [expenseValue,setExpval]=useState(0);
    const [budgetValue,setBudval]=useState(0);
    const [inpRadio, setRadio]=useState('');
    const[balAmt,setBal]=useState(0);
    let [inputAmout,setAmt]=useState('');
    let[inputPurp,setPurp]=useState('');
    const[transactionList,setTransactionList]=useState([]);
    const [showCont,setCont] = useState(false);
    const symb='₹';




     const inputP = event =>{
            setPurp(event.target.value);
        };

    
    // const inputIn =event =>{
      
    //     setAmt(event.target.value);
    // }
    const inputIn = event => {
        const value1 = event.target.value;
        // Check if the input is a valid number
        if (!isNaN(value1) && value1.trim() !== '') {
            // If it's a valid number, update the state
            setAmt(value1);
        }
        else{
            setAmt('');
        }
    }
    
    
    const handleRadio = event =>{
        setRadio(event.target.value);
    };
    

    const changeValues=()=>{
        if(!isNaN(parseInt(inputAmout))){
        if(inpRadio=='expense' && balAmt!=0){
            setExpval(expenseValue=>expenseValue+parseInt(inputAmout));
            if (balAmt!=0){
            setBal(balAmt=>balAmt-parseInt(inputAmout));
            }
        }
    
        else if(inpRadio=='Credit'){
            setBudval(budgetValue=>budgetValue+parseInt(inputAmout));
            setBal(balAmt=>balAmt+parseInt(inputAmout));
        }
        if(!inputPurp.trim()){
            alert('please enter the Purpose');
            return;
           
        }
    
    
        const newTransaction ={
            amount:parseInt(inputAmout),
            purpose:inputPurp,
            type:inpRadio
        };
        setTransactionList(prevList=>[...prevList,newTransaction]);
        setAmt('');
        setPurp('');

        
        
            
        
    }
        else{
            alert('The field is empty. Please fill up');
        }
    
        
    
    };
    const handleRemove = (indexToRemove) => {
        setTransactionList((prevList) =>
            prevList.filter((_, index) => index !== indexToRemove)
        );
    };
    
    
       
        
                return(
                
                    <Container>
                        <Bal>
                        <h3>Balance:{symb}{balAmt}</h3>
                        <button onClick={()=>setCont(!showCont)}>{showCont?'Cancel':'ADD'}</button>
                        
                        
                        </Bal>
                        {/* {showCont && <AddDetails/>}
                            */}
                            {showCont && <StDetails>
                                    
                                    <input type='text' value={inputAmout} placeholder="enter the amount" onChange={inputIn}></input>
                                    <input type='text' value={inputPurp} placeholder="enter the purpose" onChange={inputP}></input>
                                    
                                    <label>
                                            Expense
                                            <input type='radio' name='action' value='expense'  checked={inpRadio=='expense'} onChange={handleRadio}></input>
                                            Credit
                                            <input type='radio' name='action' value='Credit' checked={inpRadio=='Credit'} onChange={handleRadio}></input>
                                        </label>
                                    <button onClick={changeValues}>Add Transaction</button>
                                    </StDetails>
                                    }

                        
                        <Container2>
                        <ExpenseDisp>
                        <h3>Expense</h3>
                        <h4>{symb}{expenseValue}</h4>
                        </ExpenseDisp>
                        <BudgetDisp>
                            <h3>Credit</h3>
                            <h4>{symb}{budgetValue}</h4>
                        </BudgetDisp>
                        
                        </Container2>
                        <ListCont>
                                <h3>Transaction List</h3>
                            
                                {transactionList.map((transaction, index) => (
                                    
                                <ListItem key={index}>
                                    <p>₹{transaction.amount}</p>
                                    <p>{transaction.purpose}</p>
                                    <p>{transaction.type}</p>
                                    <button  className='remv' onClick={()=>handleRemove(index)}>Remove</button>
                                </ListItem>
                ))}

                                
                                </ListCont>
                        
                        </Container>
                        
                        
                        
                    );
                    };
                    

                    








export default AddD;