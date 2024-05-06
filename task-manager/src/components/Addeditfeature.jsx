import styled from "styled-components";
import Edit from "./Editndelete.jsx";
import { useState } from "react";
import close from "../Images/close.png";

const Minbt = styled.div`
  position: fixed;
  left: 40%;
  top: 40%;
  min-width: 20vw;
  align-items: center;
  background-color: white;
`;
const AddBt = styled.button`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: none;
  outline: none;
  padding: 10px;
`;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.667);

  img {
    width: 20%;
  }
`;
const CloseButton = styled.button`
  border: none;
  outline: none;
  position: absolute;
  left: 70%;
  top: 30%;
  background: none;
  z-index: 999; /* Ensure the close button is above the Main component */
`;

const AddEditfeature = ({
  task,
  setTask,
  index,
  id,
  CloseEdit,
  HandleDelete,
  title,
  editTask,
}) => {
  const [addEdit, setEdit] = useState(false);

  const HandleEdit = (index) => {
    setEdit(true);
  };

  //  const CloseEdit = (index) =>{
  //     setEdit(false);
  //  }

  return (
    <Main>
      <CloseButton onClick={() => CloseEdit(index)}>
        <img src={close} />
      </CloseButton>

      <Minbt>
        <AddBt onClick={() => HandleEdit(index)}>
          Edit and Delete Task Status
        </AddBt>
        {addEdit && (
          <Edit
            key="edit-component"
            task={task}
            setTask={setTask}
            index={index}
            CloseEdit={CloseEdit}
            HandleDelete={HandleDelete}
            title={title}
            id={id}
            editTask={editTask}
          ></Edit>
        )}
        <div>
          <AddBt>Update Task Status and Priority</AddBt>
        </div>
      </Minbt>
    </Main>
  );
};

export default AddEditfeature;
