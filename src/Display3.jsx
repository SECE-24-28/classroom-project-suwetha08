import { useState } from "react"

const Display3=()=>{
     const[student,setstudent]=useState({
        name:"Suwetha",
        gender:"Female",
        mobile:123456789
     })
     console.log("Current State", student)
    // const[name,setName] = useState("Suwetha")
    // const[gender,setGender] = useState("Female")
    // const[Mobile,setMobile] = useState(1234567890)
    function updateName(){
          //setstudent({name:"Suresh"})
          setstudent((previousvalue)=>{
            console.log("Previous value",previousvalue)
            return(
                {...previousvalue,name:"suresh",gender:"Male"}
            )
          })
          
    }
    return(
        <>
        <h2>Name:{student.name}</h2>
        <h2>Gender:{student.gender}</h2>
        <h2>Mobile:{student.mobile}</h2>
        <button onClick={updateName}>Change name</button>
        </>
    )
}


export default Display3

