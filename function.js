function findClient(id) {
    for (let i = 0; i < clients.length; i++) {
        if (id == clients[i].id) {
            return i
        }
    }
}


function findSavingBanks(id, typeCurrency) {
    let associatesSavingBanks = []
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingBanks.length; j++) {
            if (clients[i].id == id) {
                if (typeCurrency == client[i].savingBanks[j].currency) {
                    associatesSavingBanks.push(clients[i].savingBanks[j])
                } else if (typeCurrency == undefined) {
                    associatesSavingBanks.push(clients[i].savingBanks[j])
                }
            }
        }
    }
    return associatesSavingBanks
}

