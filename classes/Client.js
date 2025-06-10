let clientId = 1

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
}

const clients = []
clients.push(new Customer(48389508, "cc", "Matias", "Mahlknecht"));
clients.push(new Customer(48313815, "dd", "Juan Lucas", "Casanova"));
clients.push(new Customer(5, "cc", "pe", "do"));
clients.push(new Customer(6, "cc", "ca", "ca"))