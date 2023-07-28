import React, { useState, useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from "./styles"
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })

    setUsers([...users, newUser])
    history.push('/usuarios')
  }

  // Primeiro termo é uma função e o segundo é um array
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/users")

      setUsers(newUser)      
    }

    fetchUsers()

  }, [])


  return (<Container>
    <Image alt='logo-image' src={People} />
    <ContainerItens>
      <H1>Olá!</H1>
      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder="Nome" />

      <InputLabel>Idade</InputLabel>
      <Input ref={inputAge} placeholder="Idade" />

      <Button onClick={addNewUser}>
        Cadastrar <img alt="seta" src={Arrow} />
      </Button>      
    </ContainerItens>
  </Container>)
}

export default App