import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import View from "./View";
import StudentTable from "./StudentTable";
import TeacherTable from "./TeacherTable";
import Create from "./Create";
import StudentCreate from "./StudentCreate";
import TeacherCreate from "./TeacherCreate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="view" element={<View/>}>
            <Route path="teachertable" element={<TeacherTable/>}/>  
            <Route path="studenttable" element={<StudentTable/>}/>          
          </Route>          
          <Route path="create" element={<Create />}>
            <Route path="create-teacher" element={<TeacherCreate/>}/>
            <Route path="create-student" element={<StudentCreate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
