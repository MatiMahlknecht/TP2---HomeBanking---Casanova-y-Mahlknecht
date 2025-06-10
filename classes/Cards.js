let idCreditCard = 1
let idDebitCard = 1
let numberCard = 1000000000000000 //Esta variable tambien se aplica para las credit cards

class DebitCard{
    constructor(provider, securityNumber, nameUser){
        this.id = idDebitCard
        idDebitCard++
        this.number = numberCard;
        numberCard++
        this.provider = provider;
        let dateNow = new Date();
        this.expireDate = dateNow.setFullYear(dateNow.getFullYear() + 5);
        this.securityNumber = securityNumber;
        this.nameUser = nameUser
        this.historyConsumption = []
    }
}
/* 
Esto para que podamos poner distintas fechas de vencimiento
this.expireDate = emitionDate;
this.expireDate.setFullYear(this.expireDate.getFullYear() + 5)
 */

class CreditCard {
    constructor(provider, securityNumber, nameUser) {
        this.id = idCreditCard;
        idCreditCard++;
        this.number = numberCard;
        numberCard++;
        this.provider = provider;
        let dateNow = new Date();
        this.expireDate = dateNow.setFullYear(dateNow.getFullYear() + 5);
        this.securityNumber = securityNumber;
        this.nameUser = nameUser;
        this.historyConsumption = [];
        this.balance = 0;
        //si paga menos de loque debe le rompemos el ojete con el interés
        // /Si solo pagaron totales = balance * interes (1) = balance
        //sihicieron algun pago menor balance = balance * interes (1, algo)
        this.interest = 1;
        this.closeDate = closeDate;
        this.expireBalanceDate = this.expireBalanceDate;

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

