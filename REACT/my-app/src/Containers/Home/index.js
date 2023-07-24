import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
} from "./styles"
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value, 
      age: inputAge.current.value})

    setUsers([...users, newUser])        
  }

  // Primeiro termo é uma função e o segundo é um array
  useEffect(() => {
    async function fetchUsers(){
      const { data: newUser } = await axios.get("http://localhost:3001/users")
      
      setUsers(newUser)
  }

    fetchUsers()
    
  }, [])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    // Para filtrar o usuário pelo ID
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (<Container>
    <Image alt='logo-image' src={People} />
    <ContainerItens>
      <H1>Olá!</H1>
      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder="Nome" />

      <InputLabel>Idade</InputLabel>
      <Input ref={inputAge} placeholder="Idade" />

      <Button onClick={addNewUser}> Cadastrar <img alt="seta" src={Arrow} /></Button>
      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button onClick={() => deleteUser(user.id)}>
              <img alt="trash" src={Trash} />
            </button>
          </User>
        ))}
      </ul>
    </ContainerItens>
  </Container>)
}

export default App