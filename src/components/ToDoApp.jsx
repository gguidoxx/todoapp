import React, { useState } from "react";
import ToDo from "./ToDo.jsx";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEnter } from "react-icons/ai";

function ToDoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast("El campo no puede estar vacío", {
        duration: 4000,
        style: {
          background: "rgb(220 38 38)",
          color: "white",
        },
      });
    } else {
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };
      const temp = [...todos];
      temp.unshift(newTodo);
      setTodos(temp);
      setTitle("");
    }
  };
  function handleDelete(id) {
    Swal.fire({
      title: "¿Quieres eliminar esta tarea?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "rgb(22 163 74)",
      denyButtonText: `No eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const tempTodos = todos.filter((e) => e.id !== id);
        const nameTodo = todos.filter((e) => e.id == id);
        setTodos([...tempTodos]);
        toast(`Se eliminó la tarea ${nameTodo[0].title}`, {
          duration: 4000,
          style: {
            background: "rgb(22 163 74)",
            color: "white",
          },
        });
      }
    });
  }
  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    setTodos([...temp]);
    if (value == "") {
      toast(
        `¡Las tareas con nombre vacío no están permitidas, por favor coloque un nombre!`,
        {
          duration: 4000,
          style: {
            background: "rgb(234 179 8)",
            color: "#0f0f0f",
          },
        }
      );
    } else {
      item.title = value;
      toast("¡Nombre de la tarea actualizado!", {
        duration: 4000,
        style: {
          background: "rgb(42, 122, 221)",
          color: "white",
        },
      });
    }
  }

  function handleCheckboxChange(id, status) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = status;

    setTodos([...temp]);
  }
  return (
    <div className="flex flex-col mt-12">
      <div>
        <form onSubmit={handleSubmit} className="mb-7">
          <div className="flex justify-between">
            <input
              type="text"
              value={title}
              onChange={handleChange}
              className="w-3/4"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 bg-green-700 w-1/4 "
            >
              <AiOutlineEnter size={25} className="inline" />
            </button>
          </div>
        </form>
      </div>
      <div>
        {todos.map((e) => (
          <>
            <ToDo
              key={e.id}
              item={e}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onComplete={handleCheckboxChange}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default ToDoApp;
