import styled from "styled-components";
import Balance from './Expense.jsx';

const Header=styled.div`
   font-size: 30px ;
   text-align: center;

`;



function App() {
  return(
    <>
    <Header>Expense Tracker</Header>
    <Balance/>
   
    </>
  );
  
}

export default App
