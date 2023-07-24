import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Container,
  H1,
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
      <Button>
        <img alt="seta" src={Arrow} /> Voltar 
      </Button>
    </ContainerItens>
  </Container>)
}

export default Users