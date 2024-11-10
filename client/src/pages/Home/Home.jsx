import React, {useState} from 'react'
import axios from "axios"

const Home = () => {
    const [projects, setProject] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const fetchProjects = async () => {

        try{
            await axios.post('http://localhost:3000/projects', newProject)
        }catch(err){
            console.log(err)
        }
    }

    const handleAddProject = async (e) => {
        e.preventDefault();
        const newProject = {
            name,
            description,
            owner: {
                userId:"user",
                username:"user"
            }
        }
        try{
            await axios.post('http://localhost:3000/projects', newProject)
            setName('')
            setDescription('')
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <h1>Projects</h1>
            <form>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />

                <button type="submit">Add</button>


            </form>
    </div>
    
  )
}

export {Home}