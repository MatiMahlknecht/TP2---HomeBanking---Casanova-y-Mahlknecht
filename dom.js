let idUser = -1
function getDniLogin() {
    return document.getElementById("loginDni").value
}

function getPasswordLogin() {
    return document.getElementById("loginPassword").value
}

function getDniRegister() {
    return document.getElementById("registerDni").value
}

function getPasswordRegister() {
    return document.getElementById("registerPassword").value
}

function getEmailRegister() {
    return document.getElementById("registerEmail").value
}

function getLastNameRegister() {
    return document.getElementById("registerLastName").value
}

function getNameRegister() {
    return document.getElementById("registerName").value
}

function getIdDebitCard(){
    return document.getElementById("debitCardAccountSelect").value
}

function getIdCreditCard(){
    return document.getElementById("creditCardSelect").value
}

function getIdTransferOrigin(){
    return document.getElementById("transferOrigin").value
}

function getIdTransferDestiny(){
    return document.getElementById("transferDestinysSelect").value
}

function getAmountTransfer(){
    return document.getElementById("transferAmount").value
}

function getDollarsAmount(){
    return document.getElementById("dollarsAmount").value
}

function getBuyOrSell(){
    return document.getElementById("dollarOperation").value
}

function getIdPesosAccount(){
    return document.getElementById("pesosAccount").value
}

function getIdDollarsAccount(){
    return document.getElementById("dollarsAccount").value
}

function getAmountToPayCreditCard(){
    return document.getElementById("customPaymentAmount").value
}

function uncoverNumberDebitCard(){
    if (document.getElementById("debitCardNumber").type == "password"){
        document.getElementById("debitCardNumber").type = 'text'
        document.getElementById("debitCardNumberIcon").classList.remove('bi-eye') 
        document.getElementById("debitCardNumberIcon").classList.add('bi-eye-slash') 
    }else{
        document.getElementById("debitCardNumber").type = 'password'
        document.getElementById("debitCardNumberIcon").classList.remove('bi-eye-slash') 
        document.getElementById("debitCardNumberIcon").classList.add('bi-eye') 
    }
}

function uncoverSecurityNumberDebitCard(){
    if (document.getElementById("debitCardCvv").type == "password"){
        document.getElementById("debitCardCvv").type = 'text'
        document.getElementById("debitCvvIcon").classList.remove('bi-eye') 
        document.getElementById("debitCvvIcon").classList.add('bi-eye-slash') 
    }else{
        document.getElementById("debitCardCvv").type = 'password'
        document.getElementById("debitCvvIcon").classList.remove('bi-eye-slash') 
        document.getElementById("debitCvvIcon").classList.add('bi-eye') 
    }
}

function uncoverNumberCreditCard(){
    if (document.getElementById("cardNumber").type == "password"){
        document.getElementById("cardNumber").type = 'text'
        document.getElementById("cardNumberIcon").classList.remove('bi-eye') 
        document.getElementById("cardNumberIcon").classList.add('bi-eye-slash') 
    }else{
        document.getElementById("cardNumber").type = 'password'
        document.getElementById("cardNumberIcon").classList.remove('bi-eye-slash') 
        document.getElementById("cardNumberIcon").classList.add('bi-eye') 
    }
}

function uncoverSecurityNumberCreditCard(){
    if (document.getElementById("cardCvv").type == "password"){
        document.getElementById("cardCvv").type = 'text'
        document.getElementById("cvvIcon").classList.remove('bi-eye') 
        document.getElementById("cvvIcon").classList.add('bi-eye-slash') 
    }else{
        document.getElementById("cardCvv").type = 'password'
        document.getElementById("cvvIcon").classList.remove('bi-eye-slash') 
        document.getElementById("cvvIcon").classList.add('bi-eye') 
    }
}

function showModal(title, body) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerHTML = body;

    let modal = new bootstrap.Modal(document.getElementById("modal"));
    modal.show()
}

function showModal2(title, body) {
    document.getElementById("modalTitle2").innerText = title;
    document.getElementById("modalBody2").innerHTML = body;

    let modal = new bootstrap.Modal(document.getElementById("modal2"));
    modal.show()
}

function showModalMovements(title, body) {
    document.getElementById("modalTitleMovements").innerText = title;
    document.getElementById("modalBodyMovements").innerHTML = body;

    let modal = new bootstrap.Modal(document.getElementById("modalMovements"));
    modal.show()
}

function changeScreen() {
    if (document.getElementById("registerLogin").style.display == 'none') {
        document.getElementById("registerLogin").style.display = ''
        document.getElementById("bankAccount").style.display = 'none'
        document.getElementById("menuHamburguesa").style.display = 'none'
    } else if (document.getElementById("registerLogin").style.display == '') {
        document.getElementById("registerLogin").style.display = 'none'
        document.getElementById("bankAccount").style.display = ''
        document.getElementById("menuHamburguesa").style.display = ''
    }
}

function findDniPassword(dni, contraseña) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].dni == dni) {
            if (clients[i].password == contraseña) {
                return clients[i].id
            }
            return 0
        }
    }
    return -1
}

function findDni(dni) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].dni == dni) {
            return true
        }
    }
    return false
}

function login() {
    if (getDniLogin() == "" || getPasswordLogin() == "") {
        showModal("Error", "Complete todos los campos")
    } else if (/^[a-zA-Z]+$/.test(getDniLogin())) {
        showModal("Error", "El DNI es un texto, debería ser un número")
        document.getElementById("loginDni").value = ""
        document.getElementById("loginPassword").value = ""
    } else {
        let result = findDniPassword(getDniLogin(), getPasswordLogin())
        if (result > 0) {
            document.getElementById("loginDni").value = ""
            document.getElementById("loginPassword").value = ""
            idUser = result
            changeScreen()
            fillItems(idUser)
        } else if (result == 0) {
            showModal("Error", "Contraseña no coincide con el DNI")
            document.getElementById("loginPassword").value = ""
        } else if (result < 0) {
            showModal("Error", "El DNI ingresado no es correcto")
            document.getElementById("loginDni").value = ""
            document.getElementById("loginPassword").value = ""
        }
    }
}


function register() {
    if (getDniRegister() == "" || getPasswordRegister() == "" || getEmailRegister() == "" || getLastNameRegister() == "" || getNameRegister() == "") {
        showModal("Error", "Complete todos los campos para poder continuar")
    } else if (/^[a-zA-Z]+$/.test(getDniRegister())) {
        showModal("Error", "El DNI debe ser un número, no debe contener letras")
    } else if (getDniRegister().length < 7) {
        showModal("Error", "El DNI tiene menos de 7 numeros")
    } else if (findDni(getDniRegister())) {
        showModal("Error", "Este DNI ya fue ingresado anteriormente")
    } else if (/^[a-zA-Z]+$/.test(getLastNameRegister()) && /^[a-zA-Z]+$/.test(getNameRegister())) {
        let dni = Number(getDniRegister())
        clients.push(new Customer(dni, getPasswordRegister(), getNameRegister(), getLastNameRegister()))
        document.getElementById("registerDni").value = ""
        document.getElementById("registerPassword").value = ""
        document.getElementById("registerName").value = ""
        document.getElementById("registerLastName").value = ""
        document.getElementById("registerEmail").value = ""
        idUser = clientId
        changeScreen()
        fillItems(idUser)
    } else {
        showModal("Error", "El nombre o el apellido contienen números, eso no es posible")
    }
}

function closeAccount() {
    showModal2("Cierre de sesión", "¿Quiere cerrar sesión?")
}

function confirmCloseAccount() {
    changeScreen()
    document.getElementById("offcanvasMenu").style.class = 'offcanvas offcanvas-end text-bg-dark hiding'
}

function fillItems(id) {
    let opcionesCuentas = ""
    let opcionesCuentasOrigen = ""
    let opcionesDebitCards = ""
    let opcionesCuentasDestino = ""
    let opcionesCuentasEnPesos = ""
    let opcionesCuentasEnDolares = ""
    let opcionesCreditCards = ""
    let opcionesCreditCardsPago = ""
    let opcionesDebitCardsPago = ""
    let client = findClient(id)
    let savingBanks = findSavingBanks(id)
    let debitCards = findDebitCards(id)
    let creditCards = findCreditCards(id)
    for (let i = 0; i < savingBanks.length; i++) {
        if (savingBanks[i].currency == "ARS") {
            opcionesCuentas += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100" >
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en pesos</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong> ${savingBanks[i].currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> ${savingBanks[i].balance}</p>
                            <p class="card-text mb-1"><strong>Descubierto disponible:</strong> ${savingBanks[i].uncoveredLimit}</p>
                            <p class="card-text mb-1"><strong>Descubierto usado:</strong> ${savingBanks[i].overdraft}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${savingBanks[i].alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${savingBanks[i].cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm" onclick="seeMovements(${savingBanks[i].id})">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div >
            `
            opcionesCuentasOrigen += `<option value = ${savingBanks[i].id}> Alias: ${savingBanks[i].alias}, Moneda: Pesos</option>`
            opcionesCuentasEnPesos += `<option value = ${savingBanks[i].id}> Alias: ${savingBanks[i].alias}</option>`
        } else {
            opcionesCuentas += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100" >
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en dólares</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong> ${savingBanks[i].currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> ${savingBanks[i].balance}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${savingBanks[i].alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${savingBanks[i].cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm" onclick ="seeMovements(${savingBanks[i].id})">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div >
            `
            opcionesCuentasOrigen += `<option value = ${savingBanks[i].id}> Alias: ${savingBanks[i].alias}, Moneda: Dólares</option>`
            opcionesCuentasEnDolares += `<option value = ${savingBanks[i].id}> Alias: ${savingBanks[i].alias}</option>`
        }
    }
    for (let i = 0; i < debitCards.length; i++) {
        opcionesDebitCards += `<option value = ${debitCards[i].id}> Número: ${debitCards[i].number}, Proveedor: ${debitCards[i].provider}</option>`
        opcionesDebitCardsPago += `<option value = ${debitCards[i].id}> Tarjeta de débito, Número: ${debitCards[i].number}</option>`
    }
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingBanks.length; j++) {
            if (i == client) { } else if (clients[i].savingBanks[j].currency == "ARS") {
                opcionesCuentasDestino += `<option value = ${clients[i].savingBanks[j].id}> Alias: ${clients[i].savingBanks[j].alias}, Moneda: Pesos </option>`
            } else {
                opcionesCuentasDestino += `<option value =  ${clients[i].savingBanks[j].id}> Alias: ${clients[i].savingBanks[j].alias}, Moneda: Dólares </option>`
            }
        }
    }
    for (let i = 0; i < creditCards.length; i++) {
        opcionesCreditCards += `<option value = ${creditCards[i].id}> Número: ${creditCards[i].number}, Proveedor: ${creditCards[i].provider} </option>`
        opcionesCreditCardsPago += `<option value = ${creditCards[i].id}> Tarjeta de crédito, Número: ${creditCards[i].number}</option>`
    }
    document.getElementById("rowAccounts").innerHTML = opcionesCuentas
    document.getElementById("debitCardAccountSelect").innerHTML = opcionesDebitCards
    document.getElementById("transferOrigin").innerHTML = opcionesCuentasOrigen
    document.getElementById("transferDestinysSelect").innerHTML = opcionesCuentasDestino
    document.getElementById("pesosAccount").innerHTML = opcionesCuentasEnPesos
    document.getElementById("dollarsAccount").innerHTML = opcionesCuentasEnDolares
    document.getElementById("creditCardSelect").innerHTML = opcionesCreditCards
    document.getElementById("paymentMethodSelect").innerHTML = opcionesCreditCardsPago + opcionesDebitCardsPago
    document.getElementById("investmentAccountSelect").innerHTML = opcionesCuentasOrigen
}

function seeMovements(id) {
    let savingBanksMovements = findMovementsInSpecificSavingBank(id)
    let movements = ""
    for (let i = 0; i < savingBanksMovements.length; i++) {
        movements += `
        <tr>
            <td>${savingBanksMovements[i].amount}</td>
            <td>${savingBanksMovements[i].thirdPartyName}</td>
            <td>${savingBanksMovements[i].date}</td>
        </tr>
        `
    }
    showModalMovements("Movimientos", movements)
}

function debitCardsInfo(id){
    let debitCards = findDebitCards(id)
    for (let i = 0; i < debitCards.length; i++){
        if (getIdDebitCard() == debitCards[i].id){
            document.getElementById("debitCardTitle").innerText = ""
            document.getElementById("debitCardHolder").innerText = ""
            document.getElementById("debitCardExpiry").innerText = ""
            document.getElementById("debitCardNumber").value = ""
            document.getElementById("debitCardCvv").value = ""
            document.getElementById("debitCardTitle").innerText = debitCards[i].provider + " " + debitCards[i].id
            document.getElementById("debitCardHolder").innerText = debitCards[i].nameUser
            document.getElementById("debitCardExpiry").innerText = debitCards[i].expireDate
            document.getElementById("debitCardNumber").value = debitCards[i].number
            document.getElementById("debitCardCvv").value = debitCards[i].securityNumber
        }
    }
}

function seeMovementsDebitCard(id){
    let movimientos = findMovementsInSpecificDebitCard(id)
    console.log(movimientos)
    let opcionesMovimientos = ""
    for (let i = 0; i < movimientos.length; i++){
        opcionesMovimientos += `
        <tr>
            <td>${movimientos[i].amount}</td>
            <td>${movimientos[i].thirdPartyName}</td>
            <td>${movimientos[i].date}</td>
        </tr>
        `
    }
    showModalMovements("Movimientos", opcionesMovimientos)
}

function transfers(idSender, idReciever, amount){
    let exito = transferBalance(idSender, idReciever, amount)
    console.log(exito)
    if (exito > 0){
        document.getElementById("transferDestinysSelect").value = ""
        document.getElementById("transferOrigin").value = ""
        document.getElementById("transferAmount").value = ""
        console.log("Funciona")
        fillItems(idUser)
        showModal("Éxito", "Transferencia exitosa")
        return exito
    }else{
        showModal("Error", "No había suficiente dinero en la transferencia, por lo que no se pudo hacer")
    }
}

function buyOrSellDollars(){
    indexClient = findClient(idUser)
    if(getBuyOrSell() == "venta"){
        clients[indexClient].buySellDollars(getDollarsAmount(), getIdPesosAccount(), getIdDollarsAccount())
        document.getElementById("dollarsAmount").value = ""
        fillItems(idUser)
        showModal("Exito", "Venta exitosa")
    }else if(getBuyOrSell() == "compra"){
        clients[indexClient].buySellDollars(getDollarsAmount(), getIdDollarsAccount(), getIdPesosAccount())
        document.getElementById("dollarsAmount").value = ""
        fillItems(idUser)
        showModal("Exito", "Compra Exitosa")
    }
}

function creditCardsInfo(id){
    let creditCards = findCreditCards(id)
    for (let i = 0; i < creditCards.length; i++){
        if (getIdCreditCard() == creditCards[i].id){
            document.getElementById("creditCardTitle").innerText = ""
            document.getElementById("creditCardHolder").innerText = ""
            document.getElementById("creditCardExpiry").innerText = ""
            document.getElementById("creditCardClosingDate").innerText = ""
            document.getElementById("creditCardBalance").innerText = ""
            document.getElementById("creditCardBalanceExpiry").innerText = ""
            document.getElementById("cardNumber").value = ""
            document.getElementById("cardCvv").value = ""
            document.getElementById("creditCardTitle").innerText = creditCards[i].provider + " " + creditCards[i].id
            document.getElementById("creditCardHolder").innerText = creditCards[i].nameUser
            document.getElementById("creditCardExpiry").innerText = creditCards[i].expireDate
            document.getElementById("creditCardClosingDate").innerText = creditCards[i].closeDate
            document.getElementById("creditCardBalance").innerText = creditCards[i].balance
            document.getElementById("creditCardBalanceExpiry").innerText = creditCards[i].expireBalanceDate
            document.getElementById("cardNumber").value = creditCards[i].number
            document.getElementById("cardCvv").value = creditCards[i].securityNumber
        }
    }
}

function payMinimumCreditCard(){
    let creditCard = findCreditCardByIdCard(getIdCreditCard())
    document.getElementById("customPaymentAmount").value = creditCard.balance*0.1
}

function payTotalCreditCard(){
    let creditCard = findCreditCardByIdCard(getIdCreditCard())
    document.getElementById("customPaymentAmount").value = creditCard.balance
}

function payCreditCard(){
    let creditCard = findCreditCardByIdCard(getIdCreditCard())
    let indexClient = findClient(idUser)
    let exito = creditCard.registerPayment(getAmountToPayCreditCard())
    if (exito == 1){
        showModal("Éxito", "Se aceptó el pago y se pagó el total")
        for (let i = 0; i < clients[indexClient].savingBanks.length; i++){
            if (clients[indexClient].savingBanks[i].currency == "ARS"){
                clients[indexClient].savingBanks[i].extractBalance(getAmountToPayCreditCard())
            }
        }
        fillItems(idUser)
        document.getElementById("customPaymentAmount").value = ""
        document.getElementById("creditCardBalance").innerText = creditCard.balance
    } else if (exito == 0){
        showModal("Éxito", "Se pagó parte del total")
        for (let i = 0; i < clients[indexClient].savingBanks.length; i++){
            if (clients[indexClient].savingBanks[i].currency == "ARS"){
                clients[indexClient].savingBanks[i].extractBalance(getAmountToPayCreditCard())
            }
        }
        fillItems(idUser)
        document.getElementById("customPaymentAmount").value = ""
        document.getElementById("creditCardBalance").innerText = creditCard.balance
    } else {
        showModal("Error", "La cantidad ingresada es menor al pago mínimo")
    }
}

function seeMovementsCreditCard(){
    let movimientos = findMovementsInSpecificCreditCard(getIdCreditCard())
    console.log(movimientos)
    let opcionesMovimientos = ""
    for (let i = 0; i < movimientos.length; i++){
        opcionesMovimientos += `
        <tr>
            <td>${movimientos[i].amount}</td>
            <td>${movimientos[i].thirdPartyName}</td>
            <td>${movimientos[i].date}</td>
        </tr>
        `
    }
    showModalMovements("Movimientos", opcionesMovimientos)
}

function addConsumption(thirdPartyName, amount, cuotes){
    let card = 
}
document.getElementById("bankAccount").style.display = 'none'
document.getElementById("menuHamburguesa").style.display = 'none'