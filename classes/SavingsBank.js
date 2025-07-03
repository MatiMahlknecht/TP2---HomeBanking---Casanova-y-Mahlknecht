let savingBanksId = 1
let cbu = 1
class SavingBanks {
    constructor(currency, uncoveredLimit, alias) {
        this.id = savingBanksId
        savingBanksId++;
        this.currency = currency;
        this.balance = 11000;
        if (currency == "ARS") {
            this.uncoveredLimit = uncoveredLimit;  //LIMITE
            this.overdraft = 0;                    //LO QUE VA GASTANDO
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias
        this.cbu = cbu
        cbu++
    }
    extractBalance(amount) {
        let availableUncoveredMoney = this.uncoveredLimit - this.overdraft
        if (this.currency == "USD") {
            if (amount > this.balance) {
                return false
            } else if (amount <= this.balance) {
                this.balance = this.balance - amount
                return true
            }
        } else if (this.currency == "ARS") {
            if (amount <= this.balance) {
                this.balance = this.balance - amount
                return true
            } else if (amount <= this.balance + availableUncoveredMoney && availableUncoveredMoney >= 0) {
                let gasto = amount - this.balance
                this.balance = 0
                this.overdraft = this.overdraft + gasto
                return true
            } else {
                return false
            }
        }
    }
    addBalance(amount) {
        if (this.currency == "ARS") {
            if (amount > this.overdraft) {
                amount = amount - this.overdraft
                this.balance = this.balance + amount
                return this.balance
            }
            else if (this.overdraft >= amount) {
                this.overdraft = this.overdraft - amount
                return this.balance
            }

        }
        else if (this.currency = "USD") {
            this.balance = this.balance + amount
            return this.balance
        }
        return -1
    }
    registerMovements(thirdPartyName, amount) {
        if (amount === 0) {
            alert("La transacción no se pudo hacer");
            return false;
        }
        else if (amount > 0) {
            this.movements.push(new Movement(thirdPartyName, amount));
            this.addBalance(amount);
            return true;
        } else if (amount < 0) {
            // Solo registrar si se pudo extraer el saldo
            const exito = this.extractBalance(amount * (-1));
            if (exito) {
                this.movements.push(new Movement(thirdPartyName, amount));
                return true;
            } else {
                alert("Fondos insuficientes");
                return false;
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