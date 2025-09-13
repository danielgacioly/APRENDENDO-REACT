import { useState } from "react"
import { Input } from "./input"

export function AddTask({onAddTaskSubmit}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return(
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <Input type="text" placeholder="Digite uma nova tarefa..."
        onChange={(event) => setTitle(event.target.value)}/>
        
        <Input type="text" placeholder="Digite a descrição da tarefa..."
        value={description} 
        onChange={(event) => setDescription(event.target.value)}/>
        
        <button onClick={()=> {
            if (!title.trim() || !description.trim()){
                return alert ('EXISTEM CAMPOS NÃO PREENCHIDOS')
            }
            
            onAddTaskSubmit(title, description);
            setTitle("")
            setDescription("")
        
        }}     
            className="bg-slate-400 text-white px-4 py-2 rounded-md">ADICIONAR</button>
    </div>
    
)}