import { useState } from "react";

export default function ToDo({ item, id, onUpdate, onComplete, onDelete }) {
  const [editado, setEditado] = useState(false);
  const [value, setValue] = useState(item.title ?? "");
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleUpdate() {
    onUpdate(item.id, value);
    setEditado(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(item.id, value);
    setEditado(false);
  }

  function handleCheckboxChange(e) {
    onComplete(item.id, e.target.checked);
  }
  return (
    <>
      <div>
        {editado ? (
          <form
            onSubmit={handleSubmit}
            className=" items-center gap-1 flex mb-4"
          >
            <input
              className="flex-grow py-2 px-4 "
              type="text"
              value={value}
              onChange={handleChange}
            />
            <button
              className="border-none  text-white py-2 px-4"
              style={{ backgroundColor: "rgb(42, 122, 221)" }}
              onClick={handleUpdate}
            >
              Actualizar
            </button>
          </form>
        ) : (
          <div className="rounded-md mb-5 ">
            <div className="flex justify-between items-center">
              <span
                className="text-white text-2xl px-2"
                style={{
                  backgroundColor: item.completed ? "rgb(22 163 74)" : "",
                  border: "none",
                  borderRadius: item.completed ? "2px" : ""
                }}
              >
                {item.title}
              </span>
              <input
                type={"checkbox"}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-green-600  focus:ring-green-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600 mt-2"
                checked={item.checked}
                value={"completada"}
              />
            </div>
            {console.log(item)}
            {item.completed === false  ? (
              <section className="flex justify-between mt-4">
                <button
                  className=" px-4 w-1/2 text-white"
                  style={{ backgroundColor: "rgb(42, 122, 221)" }}
                  onClick={() => setEditado(true)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-600 px-4 w-1/2  text-slate-100"
                  onClick={() => onDelete(item.id)}
                >
                  Eliminar
                </button>
              </section>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
