let savingBanksId = 1
let cbu = 1
class SavingBanks{
    constructor(currency, uncoveredLimit, alias){
        savingBanksId++;
        this.currency = currency;
        this.balance = 0;
        if( currency == "ARS" ){
            this.uncoveredLimit = uncoveredLimit;
            this.overdraft = 0;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias
        this.cbu = cbu
        cbu++
    }
}

clients[0].savingBanks.push(new SavingBanks("ARS", 1000,"mmalkineki"))
clients[0].savingBanks.push(new SavingBanks("USD", 0,"mmalkineki2"))
clients[1].savingBanks.push(new SavingBanks("ARS", 5000,"jlcasanova"))
clients[1].savingBanks.push(new SavingBanks("USD", 0,"jlcasanova2"))
clients[2].savingBanks.push(new SavingBanks("ARS", 500,"pedo"))
clients[3].savingBanks.push(new SavingBanks("ARS", 250,"caca"))