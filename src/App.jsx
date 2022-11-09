import ToDo from "./components/ToDo";
import ToDoApp from "./components/ToDoApp";

import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <h1 className="text-white text-4xl justify-center text-center">
        To Do List
      </h1>
      <div className="  flex justify-center">
        <ToDoApp />
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
