// Importing the express and the ID's Generator
const express = require("express")
const uuid = require("uuid")

const port = 3000

// Give a nickname to use the Express library
const app = express()
app.use(express.json())

const user_request = []

// First Middleware
const checkUserId = (request, response, next) => {
    const { id } = request.params
    const index = user_request.findIndex( user => user.id === id)

    if(index < 0){
        return response.status(404).json({ message: "User not found"})
    }

    request.userIndex = index
    request.userId = id

    next()
}

// Second Middleware
const checkMethod = (request, reponse, next) => {

    const {url, method} = request

    console.log(`Url: ${url}, method: ${method}`)

    next()
}


// Show whole the users requests
app.get("/users-requests", checkMethod, (request, response) => {

    return response.json(user_request)
})

// Show specific user request
app.get("/order/:id", checkUserId, checkMethod, (request, response) => {
    const index = request.userIndex

    return response.json(user_request[index])
})

// Set the users order in an array
app.post("/order", checkMethod, (request, response) => {
    
    const {order, clientName, price} = request.body

    const status = "Em Preparação"

    // Create user with unique ID
    const user = { id:uuid.v4(), order, clientName, price, status }

    user_request.push(user)

    // Status 201 shows sucess to create a user
    return response.status(201).json(user)
})

// Change user order
app.put("/order/:id", checkUserId, checkMethod,(request, response) => {

    const { order, clientName, price } = request.body

    const index = request.userIndex

    const id = request.userId

    const status = request.query.status

    const updateUser = { id, order, clientName, price, status }

    user_request[index] = updateUser

    return response.json(updateUser)    
})

// Change status of user order
app.patch("/order/:id", checkUserId, checkMethod,(request, response) => {

    const index = request.userIndex

    user_request[index].status = "Pronto"

    return response.json(user_request[index])    
})

// Delete a specific user order
app.delete("/order/:id", checkUserId, checkMethod,(request, response) => {
    const index = request.userIndex

    user_request.splice(index,1)

    return response.status(204).json()
})

// Assigning a port to application
app.listen(port, () => {
    console.log(`Server started on port ${port}. 🚀`)
})