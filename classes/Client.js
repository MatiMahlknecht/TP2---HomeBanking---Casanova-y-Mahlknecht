let clientId = 1
const Valor_del_dolar = 1100

class Customer {
    constructor(dni, password, firstName, lastName) {
        this.id = clientId;
        clientId++;
        this.dni = dni;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.creditCards = [];
        this.savingBanks = []
    }
    buySellDollars(amount, idSavingBanksBuy, idSavingBanksSell) {
        let procedure = false
        for (let i = 0; i < this.savingBanks.length; i++) {
            if (this.savingBanks[i].id == idSavingBanksSell & this.savingBanks[i].currency == "USD") {
                procedure = this.savingBanks[i].extractBalance(amount)
                if (procedure) {
                    let pesos = amount / Valor_del_dolar
                    for (let j = 0; j < this.savingBanks.length; j++) {
                        if (this.savingBanks[j].id == idSavingBanksBuy & this.savingBanks[j].currency == "ARS") {
                            this.savingBanks[j].addBalance(pesos)
                        }
                    }
                }
            }   for (let i = 0; i < this.savingBanks.length; i++) {
                    if (this.savingBanks[i].id == idSavingBanksSell & this.savingBanks[i].currency == "ARS") {
                        procedure = this.savingBanks[i].extractBalance(amount)
                        if (procedure) {
                            let dollars = amount * Valor_del_dolar
                            for (let j = 0; j < this.savingBanks.length; j++) {
                                if (this.savingBanks[j].id == idSavingBanksBuy & this.savingBanks[j].currency == "USD") {
                                    this.savingBanks[j].addBalance(dollars)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

const clients = []
clients.push(new Customer(48389508, "cc", "Matias", "Mahlknecht"));
clients.push(new Customer(48313815, "dd", "Juan Lucas", "Casanova"));
clients.push(new Customer(5, "cc", "pe", "do"));
clients.push(new Customer(6, "cc", "ca", "ca"))