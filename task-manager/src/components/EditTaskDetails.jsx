import styled from "styled-components";
import roboto from "../fonts/Roboto-Bold.ttf";
import { useState } from "react";
import close from "../Images/close.png";
import Inprogress from "./InProgress.jsx";

const EditTaskContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: new;
  border-radius: 10px;
  box-shadow: 0 0 200px black;

  @font-face {
    font-family: new;
    src: url(${roboto});
  }
`;
const EditTaskhead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  img {
    width: 20px;
    margin-left: auto;
  }
  .closebutton {
    border: none;
    background: transparent;
    margin-left: auto;
  }
  .taskhead {
    font-family: new;
    font-size: 20px;
  }
`;
const EditTaskbody = styled.div`
  background-color: #ff92a4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 30vw;
  border-radius: 0 0 10px 10px;

  input {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  label {
    display: inline-block;
    width: 0px;
  }
  textarea {
    resize: none;
    border: none;
    border-radius: 5px;
  }

  .submit {
    background-color: #476495;
    border: none;
    outline: none;
    width: 20%;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
  }
  .selects {
    display: flex;
    flex-direction: row;
    margin: 10px;
  }
  .selects label {
    display: inline-block;
    width: 100px;
  }
`;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.497);
`;

const EditTaskDetails = ({
  task,
  index,
  setTask,
  closeEditmenu,
  id,
  title,
  editTask,
}) => {
  console.log(task);

  const handlePrio = (e) => {
    const newPrio = e.target.value;
    const updateTask = { ...task, priority: newPrio };
    editTask(updateTask);
  };
  const handleStat = (e) => {
    const newStat = e.target.value;
    const updateTask = { ...task, stat: newStat };
    editTask(updateTask);
  };
  return (
    <>
      <Main>
        <EditTaskContainer>
          <EditTaskhead>
            <h3 className="taskhead">EDIT TASK</h3>
            <button className="closebutton" onClick={closeEditmenu}>
              <img src={close} alt="Close" />
            </button>
          </EditTaskhead>

          <EditTaskbody key={task.id}>
            <label>Title:</label>
            <input name="title" value={task.title} readOnly />
            <label>Description:</label>
            <textarea value={task.desc} readOnly />
            <label>Team:</label>
            <input type="text" value={task.team} readOnly />
            <label>Assignee:</label>
            <input type="text" value={task.assignee} readOnly />
            <div className="selects">
              <label>Priority:</label>

              <select value={task.priority} onChange={handlePrio}>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
              <label>Status:</label>
              <select value={task.stat} onChange={handleStat}>
                <option value="Pending">Pending</option>

                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>

                <option value="Deployed">Deployed</option>
                <option value="Deffered">Deffered</option>
              </select>
            </div>
            <button
              className="submit"
              onClick={() => {
                closeEditmenu();
              }}
            >
              Add
            </button>
          </EditTaskbody>
        </EditTaskContainer>
      </Main>
    </>
  );
};
export default EditTaskDetails;
