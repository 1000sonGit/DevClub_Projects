import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import axios from 'axios';

import {
  Container,  
  Image,
  User
} from "./styles"
import BurgerPack from '../../assets/burgerPacked.svg'
import Trash from '../../assets/trash.svg'

const Users = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

  // Primeiro termo é uma função e o segundo é um array
  useEffect(() => {
    async function fetchUsers(){
      const { data: newUser } = await axios.get("http://localhost:3001/users-requests")
      
      setUsers(newUser)
  }

    fetchUsers()
    
  }, [])

  function goBackPage() {
    history.push('/')
  }

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/order/${userId}`)
    // Para filtrar o usuário pelo ID
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (<Container>
    <Image alt='logo-image' src= {BurgerPack} />
    <ContainerItens isBlur={true}>
      <H1>Pedidos</H1>      
      <ul>
        {users.map((user) => (
          <User key={user.id}>            
              <div class="userRequest">
                <p>{user.order}</p> 
                <p class="name">{user.clientName}</p>
              </div>
              <div class="imgTrash">
                <button onClick={() => deleteUser(user.id)}>
                  <img alt="trash" src={Trash} />
                </button>
              </div>            
          </User>
        ))}
      </ul>
      <Button isBack={true} onClick={goBackPage}>
        Voltar 
      </Button>
    </ContainerItens>
  </Container>)
}

export default Users