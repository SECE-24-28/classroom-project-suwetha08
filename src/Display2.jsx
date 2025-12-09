// import { useState } from "react"

// const Display2=()=>{
//     const[name,setName] = useState("")
//     console.log("The data is...",name)
//     return(
//         <>
//         <h2>Iam from Display2</h2>
//         <input type ="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
//         <button onClick={()=>{setName("")}}>Clear</button>
//         </>
//     )
// }

// export default Display2


//using useRef
import { useRef, useState } from "react"

const Display2=()=>{
    const[name,setName]= useState("")
    const input = useRef()
    const view=()=>{
        console.log("The data is...",input.current.value)
        setName(input.current.value)
    }
    return(
        <>
        <h2>Iam from Display2 {name}</h2>
        <input type ="text" ref={input} ></input>
        <button onClick={view}>Click</button>
        </>
    )
}

export default Display2
