import React from "react";
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

  const users = [
    { id: Math.random(), name: 'Milson', age: 39 },
    { id: Math.random(), name: 'Maria', age: 26 },
  ];

  return (<Container>
    <Image alt='logo-image' src={People} />
    <ContainerItens>
      <H1>Olá!</H1>
      <InputLabel>Nome</InputLabel>
      <Input placeholder="Nome" />

      <InputLabel>Idade</InputLabel>
      <Input placeholder="Idade" />

      <Button> Cadastrar <img alt="seta" src={Arrow} /></Button>
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