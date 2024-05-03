import styled from "styled-components";
import Edit2 from "./EditTaskDetails.jsx";
import { useState } from "react";
import Confrim from "./ConfirmWindow.jsx";

const EditNDelete = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;

  background-color: #eeccac;
`;
const EditButton = styled.button`
  background-color: #eeccac;
  border: none;
  outline: none;
  padding: 10px;
  text-align: center;
`;

const EditTask = ({
  task,
  setTask,
  index,
  CloseEdit,
  HandleDelete,
  id,
  title,
  editTask,
}) => {
  const [addEdit, setEdit] = useState(false);

  const HandleEdit = (index) => {
    setEdit(true);
  };
  const closeEditmenu = (index) => {
    setEdit(null);
  };

  const [confirmDel, setConfirmDel] = useState(false);

  const HandleComfirm = () => {
    setConfirmDel(true);
  };
  const CloseConfirm = () => {
    setConfirmDel(false);
  };

  // const HandleDelete = (index)=>{
  //     const updatedTasks = tasks.filter((_, i) => i !== index);
  //     setTask(updatedTasks);
  // }

  return (
    <EditNDelete>
      <EditButton onClick={() => HandleEdit(index)}>Edit</EditButton>
      {addEdit && (
        <Edit2
          task={task}
          setTask={setTask}
          addEdit={addEdit}
          setEdit={setEdit}
          closeEditmenu={closeEditmenu}
          editTask={editTask}
        ></Edit2>
      )}

      <hr></hr>
      <EditButton
        onClick={() => {
          HandleComfirm();
        }}
      >
        Delete
      </EditButton>
      {confirmDel && (
        <Confrim
          HandleDelete={HandleDelete}
          CloseConfirm={CloseConfirm}
          index={index}
          id={id}
          CloseEdit={CloseEdit}
          title={title}
        ></Confrim>
      )}
    </EditNDelete>
  );
};
export default EditTask;
