import styled from "styled-components";
import roboto from "../fonts/Roboto-Bold.ttf";
import close from "../Images/close.png";

const MainPop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.497);
`;

const PopContainer = styled.div`
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
  z-index: 999;

  @font-face {
    font-family: new;
    src: url(${roboto});
  }
`;
const Pophead = styled.div`
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
  }
`;
const Popbody = styled.div`
  background-color: #ff92a4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 30vw;
  border-radius: 0 0 10px 10px;

  label {
    display: inline-block;
    width: 160px;
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
`;

const AddPop = ({
  tasks,
  setTitle,
  setAssignee,
  setDesc,
  setPriority,
  closePop,
  setStat,
  handleTask,
}) => {
  return (
    <MainPop>
      <PopContainer>
        <Pophead>
          <h3>CREATE TASK</h3>
          <button className="closebutton" onClick={closePop}>
            <img src={close}></img>
          </button>
        </Pophead>
        <Popbody>
          <label>Title:</label>
          <input
            name="title"
            value={tasks.title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Description:</label>
          <textarea
            value={tasks.desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <label>Team:</label>
          <input type="text"></input>
          <label>Assignee:</label>
          <input
            type="text"
            value={tasks.assignee}
            onChange={(e) => setAssignee(e.target.value)}
          ></input>
          <label>Priority:</label>
          <select
            value={tasks.priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <label>Status:</label>
          <select value={tasks.stat} onChange={(e) => setStat(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Deffered">Deffered</option>
            <option value="In Progress">In Progress</option>
            <option value="Deployed">Deployed</option>
          </select>
          <button
            className="submit"
            onClick={() => {
              handleTask();
              closePop();
            }}
          >
            Add
          </button>
        </Popbody>
      </PopContainer>
    </MainPop>
  );
};
export default AddPop;
