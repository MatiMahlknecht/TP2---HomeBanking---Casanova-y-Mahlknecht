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

//En caso de que no funncione mandarle 3 fors

function findDebitCards(id) {
    let associatesDebitCards = []
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingBanks.length; j++) {
            for (let k = 0; k < clients[i].savingBanks[j].debitCards.length; k++) {
                if (clients[i].id == id) {
                    associatesDebitCards.push(clients[i].savingBanks[j].debitCards[k])
                }
            }
        }
    }
    return associatesDebitCards
}

function findDebitCardByIdCard(id){
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingBanks.length; j++) {
            for (let k = 0; k < clients[i].savingBanks[j].debitCards.length; k++) {
                if (clients[i].savingBanks[j].debitCards[k].id == id) {
                    return clients[i].savingBanks[j].debitCards[k]
                }
            }
        }
    }
}

function findCreditCards(id) {
    let associatesCreditCards = []
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            if(clients[i].creditCards[j] == id){
                associatesCreditCards.push(clients[i].creditCards[j])
            }
        }
    }
    return associatesDebitCards
}

function findCreditCardByIdCard(id){
for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            if(clients[i].creditCards[j].id == id){
                return clients[i].creditCards[j]
            }
        }
    }
}
