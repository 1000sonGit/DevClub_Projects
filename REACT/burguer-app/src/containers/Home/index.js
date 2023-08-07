import React, { useState, useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import axios from 'axios';
import {
  Container,
  Image,
  InputLabel,
  Input
} from "./styles"
import Burger from '../../assets/burger.svg'

const App = () => {
  const [users, setUsers] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()
  const history = useHistory()

  async function addNewOrder() {

    const { data: newUser } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
      price: 44.5
    })

    setUsers([...users, newUser])
    history.push('/orders')
  }

  // Primeiro termo é uma função e o segundo é um array
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/users-requests")

      setUsers(newUser)      
    }

    fetchUsers()

  }, [])


  return (<Container>
    <Image alt='logo-image' src={Burger} />
    <ContainerItens>
      <H1>Faça seu pedido!</H1>
      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-salada" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputName} placeholder="Nome" />

      <Button onClick={addNewOrder}>
        Cadastrar
      </Button>      
    </ContainerItens>
  </Container>)
}

export default App