import styled from "styled-components";
import Image from "./Images/user.png";
import roboto from "./fonts/Roboto-Bold.ttf";
import Cont1 from "./components/Component1.jsx";

const Abc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  font-size: 20px;
  @font-face {
    font-family: roboto;
    src: url(${roboto});
  }
  font-family: roboto;

  img {
    margin: 20px;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
  }
`;

const Main = () => {
  return (
    <>
      <Abc>
        <h3>Task Board</h3>
        <img src={Image}></img>
      </Abc>
      <Cont1></Cont1>
    </>
  );
};

export default Main;
