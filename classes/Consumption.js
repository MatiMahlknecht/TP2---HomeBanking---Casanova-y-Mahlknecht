let movementId =1

class Movement{
    constructor(thirdPartyName, amount, cuotes){
        this.id = movementId;
        movementId++;
        this.date = new Date();
        this.thirdPartyName =thirdPartyName;
        this.amount = amount;
        if (cuotes >= 1){
            this.cuotes = cuotes;
        }
    }
}

//caso de tarjeta de débito
new Movement("COTO", 1000)
//caso de tarjeta de crédito
new Movement("Carrefour", 1000, 3)