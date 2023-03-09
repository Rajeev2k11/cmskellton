
import { useState,useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import StudentList from './components/StudentList';
import api from "./api/List"
import { v4 as uuid } from "uuid";
import EditDetails from './components/EditDetails';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login';

function App() {
  const LOCAL_VARIABLE="list"
  const [studentList,setList]= useState(JSON.parse(localStorage.getItem(LOCAL_VARIABLE)) ?? [])

  const getList= async()=>{
    const response = await api.get("/studentList");
    return response.data;
  };
  
  const addList = async (list) => {
    const req = {
      id:uuid(),
      ...list
    }
    console.log(list);
    const response = await api.post("/studentList",req)

    setList([...studentList, response.data]);
    console.log(studentList)
  };

  const updateList =async (list)=>{
    const response= await api.put(`/studentList/${list.id}`,list)
    console.log(response.data)
    
  }

  const deleteItem =async (id) => {
    await api.delete(`/studentList/${id}`)
    const newList = studentList.filter((list) => {
      return list.id !== id;
    });

    setList(newList);
  };
  useEffect(()=>{
    const getListData= async ()=>{
      const allData = await getList();
      setList(allData)
    }
    getListData()
  },[])
  useEffect(() => {
    localStorage.setItem(LOCAL_VARIABLE, JSON.stringify(studentList));
  }, [studentList]);
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Form addList = {addList}/>}/>
      <Route path="/add" element={<Form addList = {addList}/>}/>
      <Route path="/list" element={<StudentList Lists={studentList} getId={deleteItem}/>}/>
      <Route path="/update" element={<EditDetails updateList={updateList}/>}/>
      <Route path="/login" element={<Login />}/>
      </Routes>
    

   
      </Router>
    
    </div>
  );
}

export default App;
