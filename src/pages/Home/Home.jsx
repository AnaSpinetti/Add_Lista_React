import React, {useState, useEffect} from 'react'
import './styleHome.css'
import { Card } from '../../components/Card/Card'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [studentsNames, setStudentsNames] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  //Adicionar o estudante na lista
  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudentsNames(prev => [...prev, newStudent])
  }

  useEffect(() => {
    fetch('https://api.github.com/users/anaspinetti')
      .then(response => response.json())
      .then(data => {
        setUser({
        name: data.name,
        avatar: data.avatar_url
        })
      })
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1> 
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} />  
        </div>
      </header>
      <input type="text" placeholder='Digite o nome...' onChange={e => setStudentName(e.target.value)} />
      <button type='button' onClick={handleAddStudent}>Adicionar</button>
      
      {
        studentsNames.map(student => 
          //O Key deve ser uma chave única, geralmente é um ID ou poderia ser email, cpf
          <Card name={student.name} time={student.time} key={student.time} />
        )
      }
    </div>

  )
}
