import React from "react";
import { Container, H1, Image, ImageArrow, ContainerItens, InputLabel, Input, Button } from "./styles"
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

const App = () => {

  const users = [{id: Math.random(), name:'Milson', age:39}, {id: Math.random(), name:'Maria', age:26}]

  return (<Container>
    <Image alt='logo-image' src={People}/>
    <ContainerItens>
      <H1>Olá!</H1>
      <InputLabel>Nome</InputLabel>
      <Input placeholder="Nome"/>

      <InputLabel>Idade</InputLabel>
      <Input placeholder="Idade"/>

      <Button> Cadastrar <ImageArrow alt="seta" src={Arrow}/></Button>
      <ul>
        <li>{users[0].name} - {users[0].age}</li>
      </ul>
    </ContainerItens>
  </Container>)
}

export default App