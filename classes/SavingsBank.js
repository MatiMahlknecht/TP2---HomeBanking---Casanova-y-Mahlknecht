let savingBanksId = 1
let cbu = 1
class SavingBanks {
    constructor(currency, uncoveredLimit, alias) {
        this.id = savingBanksId
        savingBanksId++;
        this.currency = currency;
        this.balance = 0;
        if (currency == "ARS") {
            this.uncoveredLimit = uncoveredLimit;
            this.overdraft = 10000;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias
        this.cbu = cbu
        cbu++
    }
    moneyMovements(amount) {
        if (this.currency = "USD") {
            if (amount > this.balance) {
                return false
            } else if (amount <= this.balance) {
                return true
            }
        } else if (this.currency = "ARS") {
            if (amount <= this.balance) {
                return true
            } else if (amount < this.balance + this.overdraft){
                let gasto = this.balance + this.overdraft - amount
                this.uncoveredLimit = gasto
                return true
            }else{
                return false
            }
        }
    }
}

clients[0].savingBanks.push(new SavingBanks("ARS", 1000, "mmalkineki"))
clients[0].savingBanks.push(new SavingBanks("USD", 0, "mmalkineki2"))
clients[1].savingBanks.push(new SavingBanks("ARS", 5000, "jlcasanova"))
clients[1].savingBanks.push(new SavingBanks("USD", 0, "jlcasanova2"))
clients[2].savingBanks.push(new SavingBanks("ARS", 500, "pedo"))
clients[3].savingBanks.push(new SavingBanks("ARS", 250, "caca"))