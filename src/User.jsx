import { useEffect, useState } from "react"
import Single from "./Single"

export default function User(){
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return(
        <div>
            <h1>User: {user.length}</h1>
             {
                user.map(people => <Single people ={people}></Single>)
             }
        </div>
    )
}