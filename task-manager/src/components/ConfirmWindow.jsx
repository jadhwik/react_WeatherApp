import styled from "styled-components";
import close from "../Images/close.png";

const HeadOfConfirm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  background-color: white;
  .close {
    background: none;
    border: none;
    outline: none;
    margin-left: auto;
  }
  img {
    width: 20px;
  }
  .headconf {
    background-color: white;
    color: black;
  }
`;

const BodyPart = styled.div`
  background-color: #999a9a;
  padding: 30px;
  font-size: 20px;

  .yes,
  .no {
    background-color: #476495;
    border: none;
    outline: none;
    padding: 10px;
    margin: 10px;
    color: white;
    border-radius: 5px;
  }
`;
const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.497);
`;
const MainBody = styled.div`
  position: absolute;
  left: 20%;
  top: 20%;
  width: 30vw;
  text-align: center;
  transform: translate(50%, 50%);
`;

const ConfrimDelfun = ({
  HandleDelete,
  CloseConfirm,
  id,
  index,
  CloseEdit,
  title,
}) => {
  return (
    <Body>
      <MainBody>
        <HeadOfConfirm>
          <h3 className="headconf">DELETE TASK</h3>
          <button
            onClick={() => {
              CloseConfirm();
              CloseEdit();
            }}
            className="close"
          >
            <img src={close} />
          </button>
        </HeadOfConfirm>
        <BodyPart>
          <p>Do you wish to delete?</p>
          <button
            onClick={() => {
              HandleDelete(id);
              CloseEdit();
            }}
            className="yes"
          >
            Yes
          </button>
          <button
            onClick={() => {
              CloseConfirm();
              CloseEdit();
            }}
            className="no"
          >
            no
          </button>
        </BodyPart>
      </MainBody>
    </Body>
  );
};

export default ConfrimDelfun;
