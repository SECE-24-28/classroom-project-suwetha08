import { useEffect, useState } from "react"

const Display4=()=>{
    const [data,setData] = useState(100)
    useEffect(()=>{                             
       console.log("HELLOOO",{data})
    },)

    return(
        <>
       <h2>Iam from display4!!</h2>
       <h2>The data is: {data}</h2>
       <button onClick={()=>{setData(data=>data+1)}}>Increment</button>
       </>
    )
}

export default Display4