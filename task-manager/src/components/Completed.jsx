import styled from "styled-components";
import roboto from "../fonts/Roboto-Bold.ttf";
import { useState } from "react";
import Addedit from "./Addeditfeature.jsx";

/*===============================================*/

const InPro = ({
  tasks,
  setTask,
  HandleDelete,
  editTask,
  filteredTask,
  filterPrio,
}) => {
  const CompletedTask = tasks.filter((task) => task.stat === "Completed");
  console.log(CompletedTask);
  const [AddEditTask, setEditTask] = useState(null);
  const handleEdit = (taskId) => {
    setEditTask(taskId);
  };
  const CloseEdit = () => {
    setEditTask(null);
  };
  const Filt = filteredTask.filter((task) => task.stat === "Completed");
  const filtPrio = filterPrio.filter((task) => task.stat === "Completed");
  console.log(CompletedTask);
  console.log(Filt);
  console.log(filtPrio);

  return (
    <div className="Cont3">
      <>
        {/* The main div container of pending*/}
        <h3 id="Completed">Completed</h3>

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
              {CompletedTask.length === 0 && <p> No tasks are Completed</p>}

              {CompletedTask.map((task, index) => (
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

export default InPro;
