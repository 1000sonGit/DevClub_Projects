// Importando o express
const express = require("express")
const uuid = require("uuid")

const port = 3000

// Dando um apelido para usar o express
const app = express()
app.use(express.json())

/*
    - Query params => meusite.com/users?name=milson&age=39 //FILTROS
    - Route params => /users/2  //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body => { "name": "Rodolfo", "age": 32}

    - GET         => Busca informação no back-end
    - POST        => Cria informação no back-end
    - PUT / PATCH => Alterar/Atualizar informação no back-end
    - DELETE      => Deletar informação no back-end

    -Middleware => INTERCEPTADOR => Tem o poder de parar ou alterar dados da requisição
*/

const users = []

const checkUserId = (request, response, next) => {
    const { id } = request.params
    const index = users.findIndex( user => user.id === id)

    if(index < 0){
        return response.status(404).json({ message: "User not found"})
    }

    request.userIndex = index
    request.userId = id

    next()
}

// Criando um rota
app.get("/users", (request, response) => {
    
    return response.json(users)
    
})

app.post("/users", (request, response) => {
    const {name, age} = request.body

    // Criando o usuário com ID único
    const user = { id:uuid.v4(), name, age }
    
    // Guardando o usuário no array
    users.push(user)

    // Status 201 indica sucesso ao criar o usuário
    return response.status(201).json(user)
    
})

app.put("/users/:id", checkUserId,(request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId

    const updateUser = { id, name, age }

    users[index] = updateUser

    return response.json(updateUser)
    
})

app.delete("/users/:id", checkUserId,(request, response) => {
    const index = request.userIndex

    users.splice(index,1)

    return response.status(204).json()
    
})

// Atribuindo uma porta para a aplicação
app.listen(port, () => {
    console.log(`Server started on port ${port}. 🚀`)
})