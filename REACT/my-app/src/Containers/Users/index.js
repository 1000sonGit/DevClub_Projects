import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import H1 from '../../components/Title'

import axios from 'axios';

import {
  Container,  
  Image,
  ContainerItens,
  Button,
  User
} from "./styles"
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

const Users = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

  // Primeiro termo é uma função e o segundo é um array
  useEffect(() => {
    async function fetchUsers(){
      const { data: newUser } = await axios.get("http://localhost:3001/users")
      
      setUsers(newUser)
  }

    fetchUsers()
    
  }, [])

  function goBackPage() {
    history.push('/')
  }

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    // Para filtrar o usuário pelo ID
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (<Container>
    <Image alt='logo-image' src= {Avatar} />
    <ContainerItens>
      <H1>Usuários</H1>      
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
      <Button onClick={goBackPage}>
        <img alt="seta" src={Arrow} /> Voltar 
      </Button>
    </ContainerItens>
  </Container>)
}

export default Users