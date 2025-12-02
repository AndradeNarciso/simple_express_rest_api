import userCollection from "../db/colection.js";

export function nextId() { return userCollection.length + 1 }

export function getuserById(id) {
    return userCollection.find(user => user.id === Number(id))
}

export function updateUser(requestUser) {
    const { Name, Age, id } = requestUser
    console.log(id)
    const  user = userCollection.find(user => user.id === Number(id))
    if (user) {
        userCollection[id-1]={ id, Name, Age }
        return
    }
    return "There is no any User with that id"

}

