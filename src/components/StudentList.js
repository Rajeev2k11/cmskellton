import React from "react";
import StudentCard from "./StudentCard";

function StudentList(props) {
  console.log("FROM studentList", props);
 
  const deleteList = (id)=>{
    props.getId(id)
  }

  
  const renderStudentList = props.Lists.map((studentInfo)=>{
    return(
        <StudentCard 
        studentInfo={studentInfo}
        key={studentInfo.id}
        handleClick={deleteList}
     
        />
    )
  })
  return (
    <div>
     {renderStudentList}
    </div>
  );
}

export default StudentList;
