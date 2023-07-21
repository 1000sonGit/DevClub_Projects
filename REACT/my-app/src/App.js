import React, {useState} from "react";
import {
  Container, 
  H1,
  Image,
  ContainerItens, 
  InputLabel, 
  Input, 
  Button,
  User} from "./styles"
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

const App = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()
  
  function addNewUser(){
    setUsers([{id: Math.random(), name, age}])    
  }

  function changeInputName(event){
    setName(event.target.value)
  }

  function changeInputAge(event){
    setAge(event.target.value)
  }

  return (<Container>
    <Image alt='logo-image' src={People} />
    <ContainerItens>
      <H1>Olá!</H1>
      <InputLabel>Nome</InputLabel>
      <Input onChange={changeInputName} placeholder="Nome" />

      <InputLabel>Idade</InputLabel>
      <Input onChange={changeInputAge} placeholder="Idade" />

      <Button onClick={addNewUser}> Cadastrar <img alt="seta" src={Arrow} /></Button>
      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button><img alt="trash" src={Trash}/></button>
          </User>
        ))}
      </ul>
    </ContainerItens>
  </Container>)
}

export default App