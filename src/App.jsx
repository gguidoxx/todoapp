import ToDo from "./components/ToDo";
import ToDoApp from "./components/ToDoApp";

import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <div className=" min-h-screen flex justify-center dark:bg-zinc-900">
        <ToDoApp />
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
