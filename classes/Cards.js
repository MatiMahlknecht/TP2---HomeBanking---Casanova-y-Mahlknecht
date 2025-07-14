let idCreditCard = 1
let idDebitCard = 1
let numberCard = 1000000000000000 //Esta variable tambien se aplica para las credit cards

class DebitCard {
    constructor(provider, securityNumber, nameUser) {
        this.id = idDebitCard
        idDebitCard++
        this.number = numberCard;
        numberCard++
        this.provider = provider;
        this.expireDate = new Date();
        this.expireDate.setFullYear(this.expireDate.getFullYear() + 5);
        this.securityNumber = securityNumber;
        this.nameUser = nameUser
        this.movements = []
    }
    registerMovements(thirdPartyName, amount) {
        if (this.expireDate <= new Date()) {
            alert("No puedes hacer esta transacción la tarjeta está vencida")
            return false
        } else {
            if (amount > 0) {
                for (let i = 0; i < clients.length; i++) {
                    for (let j = 0; j < clients[i].savingBanks.length; j++) {
                        for (let k = 0; k < clients[i].savingBanks[j].debitCards.length; k++) {
                            if (clients[i].savingBanks[j].debitCards[k].id == this.id) {
                                let exito = clients[i].savingBanks[j].addBalance(amount)
                                if (exito) {
                                    this.movements.push(new Movement(thirdPartyName, amount))
                                    return true
                                }

                            }
                        }
                    }
                }
            } else if (amount < 0) {
                let debitCardNumber = this.id
                for (let i = 0; i < clients.length; i++) {
                    for (let j = 0; j < clients[i].savingBanks.length; j++) {
                        for (let k = 0; k < clients[i].savingBanks[j].debitCards.length; k++) {
                            if (clients[i].savingBanks[j].debitCards[k].id == debitCardNumber) {
                                let exito = clients[i].savingBanks[j].extractBalance(amount * (-1))
                                if (exito) {
                                    this.movements.push(new Movement(thirdPartyName, amount))
                                    return true
                                }
                            }
                        }
                    }
                }
            }
            return false
        }
    }
}
/* 
Esto para que podamos poner distintas fechas de vencimiento
this.expireDate = emitionDate;
this.expireDate.setFullYear(this.expireDate.getFullYear() + 5)
 */

class CreditCard {
    constructor(provider, securityNumber, nameUser, closeDate, expireBalanceDate) {
        this.id = idCreditCard;
        idCreditCard++;
        this.number = numberCard;
        numberCard++;
        this.provider = provider;
        this.expireDate = new Date();
        this.expireDate.setFullYear(this.expireDate.getFullYear() + 5);
        this.securityNumber = securityNumber;
        this.nameUser = nameUser;
        this.movements = [];
        this.balance = 1500;
        //si paga menos de loque debe le rompemos el ojete con el interés
        // /Si solo pagaron totales = balance * interes (1) = balance
        //sihicieron algun pago menor balance = balance * interes (1, algo)
        this.interest = 1;
        this.closeDate = closeDate;
        this.expireBalanceDate = expireBalanceDate;

    }

    registerMovements(thirdPartyName, amount, cuotes) {
        if (this.expireDate <= new Date()) {
            console.log(this.expireDate)
            alert("No puedes hacer esta transacción la tarjeta está vencida")
            return false
        } else {
            if (amount > 0) {
                let payment = amount / cuotes
                this.balance = this.balance + payment
                this.movements.push(new Movement(thirdPartyName, amount, cuotes))
                return true
            } else if (amount < 0) {
                let payment = amount / cuotes
                this.balance = this.balance + payment
                this.movements.push(new Movement(thirdPartyName, amount, cuotes))
                return true
            }
            return false
        }
    }

    registerPayment(amount) {
        let pagoMinimo = this.balance * 0.1
        if (amount >= pagoMinimo) {
            this.balance = this.balance - amount
            if (this.balance <= 0) {
                return 1
            }
            else if (this.balance >= 0) {
                return 0
            }
        }
        else if (amount < pagoMinimo) {
            return -1
        }
    }



}



clients[0].savingBanks[0].debitCards.push(new DebitCard("Visa", 811, "Matías José Mahlknecht"));
clients[0].savingBanks[0].debitCards.push(new DebitCard("Visa", 318, "Matías José Mahlknecht"));
clients[0].savingBanks[1].debitCards.push(new DebitCard("Visa", 911, "Matías José Mahlknecht"));
clients[0].savingBanks[1].debitCards.push(new DebitCard("Visa", 418, "Matías José Mahlknecht"));
clients[1].savingBanks[0].debitCards.push(new DebitCard("MasterCard", 777, "Juan Lucas Casanova"));
clients[1].savingBanks[1].debitCards.push(new DebitCard("MasterCard", 776, "Juan Lucas Casanova"));
clients[1].savingBanks[1].debitCards.push(new DebitCard("MasterCard", 775, "Juan Lucas Casanova"));
clients[2].savingBanks[0].debitCards.push(new DebitCard("Visa", 501, "pe"));
clients[3].savingBanks[0].debitCards.push(new DebitCard("MasterCard", 212, "ca"));
clients[1].creditCards.push(new CreditCard("Visa", 888, "Juan Lucas Casanova"))