import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@/Components/layout";
import routes from "./routes";



function App() {

  return (
    <>
      <div className="container bg-ctech-200 border-2  opacity-90 left-[50%] rounded-xl z-10 mx-auto mt-2 -translate-x-2/4 p-2 fixed">
        <Navbar routes={routes}/>
      </div>
      <Routes>
        {routes.map(({path, element}, key) => 
          element && <Route key={key}  path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />}/>
      </Routes>
    </>
  )
}

export default App
