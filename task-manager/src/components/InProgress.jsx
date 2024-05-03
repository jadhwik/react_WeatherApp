import styled from "styled-components";
import roboto from "../fonts/Roboto-Bold.ttf";
import { useState, useEffect } from "react";
import EditTask from "./Editndelete.jsx";
import Addedit from "./Addeditfeature.jsx";

/*===============================================*/

const InProgress = ({
  tasks,
  setTask,
  selectedOption,
  index,
  HandleDelete,
  editTask,
  filteredTask,
  filterPrio,
}) => {
  console.log(tasks);

  const InprogressTask = tasks.filter((task) => task.stat === "In Progress");
  const Filt = filteredTask.filter((task) => task.stat === "In Progress");
  const filtPrio = filterPrio.filter((task) => task.stat === "In Progress");
  console.log(Filt);
  console.log(InprogressTask);
  const [AddEditTask, setEditTask] = useState(null);
  const handleEdit = (taskId) => {
    setEditTask(taskId);
  };
  const CloseEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="Cont3">
      <>
        <h3 id="Inpro">In Progress</h3>
        <div>
          {Filt.length > 0 ? (
            <>
              {Filt.map((task, index) => (
                <div className="Task" key={task.id}>
                  <div>
                    <div className="TaskHead">
                      <h4>{task.title}</h4>
                      <h4 className="prio">{task.priority}</h4>
                    </div>
                    <hr></hr>
                    {/*horizontal line */}

                    <p>{task.desc}</p>
                    <div className="user-and-button">
                      <h4>{task.assignee}</h4>
                      <button
                        className="dot"
                        onClick={() => handleEdit(task.id)}
                      >
                        <div></div>
                        <div></div>
                        <div></div>
                      </button>
                      {AddEditTask === task.id && (
                        <Addedit
                          task={task}
                          setTask={setTask}
                          index={index}
                          id={task.id}
                          CloseEdit={CloseEdit}
                          HandleDelete={HandleDelete}
                          editTask={editTask}
                        ></Addedit>
                      )}
                    </div>

                    <div className="assign">{task.stat}</div>
                  </div>
                </div>
              ))}
            </>
          ) : filtPrio.length > 0 ? (
            <>
              {filtPrio.map((task, index) => (
                <div className="Task" key={task.id}>
                  <div>
                    <div className="TaskHead">
                      <h4>{task.title}</h4>
                      <h4 className="prio">{task.priority}</h4>
                    </div>
                    <hr></hr>
                    {/*horizontal line */}

                    <p>{task.desc}</p>
                    <div className="user-and-button">
                      <h4>{task.assignee}</h4>
                      <button
                        className="dot"
                        onClick={() => handleEdit(task.id)}
                      >
                        <div></div>
                        <div></div>
                        <div></div>
                      </button>
                      {AddEditTask === task.id && (
                        <Addedit
                          task={task}
                          setTask={setTask}
                          index={index}
                          id={task.id}
                          CloseEdit={CloseEdit}
                          HandleDelete={HandleDelete}
                          editTask={editTask}
                        ></Addedit>
                      )}
                    </div>

                    <div className="assign">{task.stat}</div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {InprogressTask.length === 0 && <p> No tasks are In Progress</p>}

              {InprogressTask.map((task, index) => (
                <div className="Task" key={task.id}>
                  <div>
                    <div className="TaskHead">
                      <h4>{task.title}</h4>
                      <h4 className="prio">{task.priority}</h4>
                    </div>
                    <hr></hr>
                    {/*horizontal line */}

                    <p>{task.desc}</p>
                    <div className="user-and-button">
                      <h4>{task.assignee}</h4>
                      <button
                        className="dot"
                        onClick={() => handleEdit(task.id)}
                      >
                        <div></div>
                        <div></div>
                        <div></div>
                      </button>
                      {AddEditTask === task.id && (
                        <Addedit
                          task={task}
                          setTask={setTask}
                          index={index}
                          id={task.id}
                          CloseEdit={CloseEdit}
                          HandleDelete={HandleDelete}
                          editTask={editTask}
                        ></Addedit>
                      )}
                    </div>

                    <div className="assign">{task.stat}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default InProgress;
