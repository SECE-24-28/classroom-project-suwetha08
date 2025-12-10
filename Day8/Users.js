import { useParams } from "react-router-dom"

function Users(){
     const data = useParams()
    return(
       <>
       <h1>User page{data.id}</h1>
       </>
    )
}

export default Users


