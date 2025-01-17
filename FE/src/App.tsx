import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";

document.title = "Homescreen";

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
