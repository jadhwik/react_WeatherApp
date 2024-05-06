import styled from "styled-components";
// import ReactDate from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import roboto from "../fonts/Roboto-Bold.ttf";
import { useEffect, useState } from "react";
import close from "../Images/close.png";
import Complete from "./Completed.jsx";
import Deffered from "./Deffered.jsx";
import Inprogre from "./InProgress.jsx";
import Pending from "./Pending.jsx";
import Deployed from "./Deployed.jsx";
import AddEditfeature from "./Addeditfeature.jsx";
import AddPop from "./Popupwindow.jsx";

/*Button to add  new task*/

const AddTaskbutton = styled.div`
  right: 20px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #476495;
  color: white;
  width: 20%;
  margin-left: auto;
  font-family: new;
  text-align: center;
  @font-face {
    font-family: new;
    src: url(${roboto});
  }
`;

/*==================================Styling for Task State==========================================*/

/*==============================Styling for pop up to add a new Task==================================*/

function TaskManager() {
  const getDataFromLs = () => {
    const data = localStorage.getItem("task");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [tasks, setTask] = useState(getDataFromLs());

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const HandleChange = () => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("P0");
  const [stat, setStat] = useState("Pending");

  // var  toDo=JSON.parse(localStorage.getItem('tasks')||'[]');
  const [id, setId] = useState(0);
  const incrementId = () => {
    setId((prevId) => prevId + 1);
  };

  /* Function to Add  a popup to add new task */
  console.log("printing task type", tasks);

  const handleTask = (e) => {
    const newTask = {
      id,
      title,
      desc,
      assignee: "@" + assignee,
      priority,
      stat,
    };

    // localStorage.setItem('tasks',JSON.stringify(toDo));

    setTask([...tasks, newTask]);
    incrementId();
    setTitle("");
    setDesc("");
    setAssignee("");
    setPriority("P0");
    setStat("Pending");
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  /*============================SECTION FOR EDITING THE TASK DETAILS=================*/

  /* =========================ADDING WINDOWS FOR INPROGRESS, COMPLETED,=========================*/

  const HandleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTask(updatedTasks);
    console.log(id);
  };

  const [AddPopup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(true);
  };

  const closePop = () => {
    setPopup(false);
  };

  const editTask = (updateTask) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === updateTask.id) {
        return { ...task, ...updateTask };
      }
      return task;
    });
    setTask(updateTasks);
  };

  const [searchAssignee, setSearchAssignee] = useState("");
  const [filteredTask, setFilteredTask] = useState([]);
  const sortAssignee = (e) => {
    const value = e.target.value;
    setSearchAssignee(value);
    const filtered = tasks.filter((task) => task.assignee.includes(value));
    setFilteredTask(filtered);
  };
  console.log(filteredTask);

  const [searchPrio, setSearchPrio] = useState("");
  const [filterPrio, setFilter] = useState([]);
  const sortPrio = (e) => {
    const prio = e.target.value;
    setSearchPrio(prio);
    const Filter = tasks.filter((task) => task.priority.includes(prio));
    setFilter(Filter);
  };
  console.log(filterPrio);

  /*===================================================================================================================*/
  return (
    <div className="Container1">
      <div className="Headcomp">
        <div className="search">
          <label>Filter By :</label>
          <input
            type="text"
            value={searchAssignee}
            onChange={(e) => sortAssignee(e)}
            placeholder="Asignee name"
          ></input>
        </div>

        {/* <label>Priority</label>
        <select id="priority">
          <option>Priority</option>
        </select> */}
        {/* <div className="rec">
          <ReactDate
            dateFormat="dd-mm-yyyy"
            placeholderText="DD-MM-YYYY - DD-MM-YYYY"
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={HandleChange}
          />
          <FontAwesomeIcon icon={faCalendar} className="calicon" />
        </div> */}
        <AddTaskbutton onClick={handlePopup}>Add new Task</AddTaskbutton>
        {AddPopup && (
          <AddPop
            tasks={tasks}
            setTask={setTask}
            setTitle={setTitle}
            setAssignee={setAssignee}
            setPriority={setPriority}
            setDesc={setDesc}
            closePop={closePop}
            handleTask={handleTask}
            setStat={setStat}
          ></AddPop>
        )}
      </div>
      <div className="sortby">
        <label>Sort By Priority:</label>

        <select
          value={searchPrio}
          onChange={(e) => {
            sortPrio(e);
          }}
        >
          <option value="Nill">Nil</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
      </div>

      {/* <TaskStatContainer></TaskStatContainer> */}

      <div className="Comp">
        <Pending
          tasks={tasks}
          setTask={setTask}
          HandleDelete={HandleDelete}
          editTask={editTask}
          filteredTask={filteredTask}
          filterPrio={filterPrio}
        ></Pending>
        <Inprogre
          tasks={tasks}
          setTask={setTask}
          HandleDelete={HandleDelete}
          editTask={editTask}
          filteredTask={filteredTask}
          filterPrio={filterPrio}
        ></Inprogre>
        <Complete
          tasks={tasks}
          setTask={setTask}
          HandleDelete={HandleDelete}
          editTask={editTask}
          filterPrio={filterPrio}
          filteredTask={filteredTask}
        ></Complete>
        <Deployed
          tasks={tasks}
          setTask={setTask}
          HandleDelete={HandleDelete}
          editTask={editTask}
          filterPrio={filterPrio}
          filteredTask={filteredTask}
        ></Deployed>
        <Deffered
          tasks={tasks}
          setTask={setTask}
          HandleDelete={HandleDelete}
          editTask={editTask}
          filterPrio={filterPrio}
          filteredTask={filteredTask}
        ></Deffered>
      </div>
    </div>
  );
}

export default TaskManager;
