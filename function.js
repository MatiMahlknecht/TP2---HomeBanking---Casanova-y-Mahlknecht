function findClient(id){
    for(let i = 0; i<clients.length; i++){
        if (id==clients[i].id){
            return i
        }
    }
}
