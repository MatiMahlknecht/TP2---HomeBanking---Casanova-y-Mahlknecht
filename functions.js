usuarioLogueado = -1
opciones_de_cuenta = "" 


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
                if (typeCurrency == clients[i].savingBanks[j].currency) {
                    associatesSavingBanks.push(clients[i].savingBanks[j])
                } else if (typeCurrency == undefined) {
                    associatesSavingBanks.push(clients[i].savingBanks[j])
                }
            }
        }
    }
    return associatesSavingBanks
}

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

function findDebitCardByIdCard(id) {
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
            if (clients[i].creditCards[j].id == id) {
                associatesCreditCards.push(clients[i].creditCards[j])
            }
        }
    }
    return associatesCreditCards
}

function findCreditCardByIdCard(id) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            if (clients[i].creditCards[j].id == id) {
                return clients[i].creditCards[j]
            }
        }
    }
}

function findMovementsInSpecificSavingBank(id) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingBanks.length; j++) {
            if (clients[i].savingBanks[j].id == id) {
                return clients[i].savingBanks[j].movements
            }
        }
    }
}

function findMovementsInSpecificDebitCard(id) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingBanks.length; j++) {
            for (let k = 0; k < clients[i].savingBanks[j].debitCards.length; k++) {
                if (clients[i].savingBanks[j].debitCards[k].id == id){
                    return clients[i].savingBanks[j].debitCards[k].historyConsumption
                }
            }
        }
    }
    return -1;
}


function findMovementsInSpecificCreditCard(id) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            if (clients[i].creditCards[j].id == id) {
                return clients[i].creditCards[j].historyConsumption
            }
        }
    }
    return -1;
}

function TransferBalance(idCajaOrdenante, idCajaBeneficiario, amount){
    for(let i =0; i< clients.length; i++){
        for(let j=0; j<clients[i].savingBanks.length; j++){
            if(clients[i].savingBanks[j].id == idCajaOrdenante){
                 exito = clients[i].savingBanks[j].extractBalance(amount)
                 return exito
            }
                
                
        }
    }
       for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingBanks.length; j++) {
            if (
                clients[i].savingBanks[j].id == idCajaBeneficiario ||
                clients[i].savingBanks[j].alias == idCajaBeneficiario ||
                clients[i].savingBanks[j].cbu == idCajaBeneficiario
            ) {
                exito = clients[i].savingBanks[j].addBalance(amount);
                return exito
            } 
        }
    }
}

// funciones de control y chequeos
    function detectClients(dni, contraseña) {
	for(let i= 0; i<clients.length;i++) {
		if (dni == clients[i].dni && contraseña== clients[i].password){
		    return clients[i].dni
		}
		else if(dni==clients[i].dni && contraseña != clients[i].password){
		    return 0
		}
    }
    return -1
}

// Acciones en la pagina (Funciones dependientes del DOM)


function login(){
    usuarioLogueado = detectClients(ui.getDni(),ui.getContraseña())
    if(usuarioLogueado == -1){
        ui.showModal("ERROR", "USUARIO NO EXISTE")
    }
    else if(usuarioLogueado == 0){
        ui.showModal("ERROR", "CONTRASEÑA INCORRECTA")
    }
    else{
        for(let i=0; i < clients.length;i++){
            if(usuarioLogueado == clients[i].dni){
            }
        }
        console.log("todo bien")              
        ui.changeScreen();
        completeAccounts()
    }
}

function registrarUsuario() {
    if (ui.getRegisterDni() == "" || ui.getRegisterPassword() == "" || ui.getRegisterEmail() == "" || ui.getRegisterLastName() == "" || ui.getRegisterName() == "") {
        ui.showModal("Error", "Complete todos los campos para poder continuar")
    } else if (/^[a-zA-Z]+$/.test(ui.getRegisterDni())) {
        ui.showModal("Error", "El DNI debe ser un número, no debe contener letras")
    } else if (ui.getRegisterDni().length < 7) {
        ui.showModal("Error", "El DNI tiene menos de 7 numeros")
    } else if (findDni(ui.getRegisterDni())) {
        ui.showModal("Error", "Este DNI ya fue ingresado anteriormente")
    } else if (/^[a-zA-Z]+$/.test(ui.getRegisterLastName()) && /^[a-zA-Z]+$/.test(ui.getRegisterName())) {
        let dni = Number(ui.getRegisterDni())
        clients.push(new Customer(dni, ui.getRegisterPassword(), ui.getRegisterName(), ui.getRegisterLastName()))
        document.getElementById("registerDni").value = ""
        document.getElementById("registerPassword").value = ""
        document.getElementById("registerName").value = ""
        document.getElementById("registerLastName").value = ""
        document.getElementById("registerEmail").value = ""
        ui.changeScreen()

    } else {
        ui.showModal("Error", "El nombre o el apellido contienen números, eso no es posible")
    }
}

function findDni(dni){
    for(let i = 0; i < clients.length; i++){
        if(clients[i].dni == dni){
            return true // Ya existe
        }
    }
    return false; // No existe
}

function logout(){
    ui.changeScreen()
    usuarioLogueado= -1
}

function completeAccounts(){
        cajasDisponibles = findSavingBanks(usuarioLogueado)
        for(let i = 0; i<cajasDisponibles.length; i++){
            // if(cajasDisponibles[i].currency == "ARS"){
                
            document.getElementById("rowAccounts").innerHTML +=`
                    <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en Pesos</h5>  
                            <p class="card-text mb-1"><strong>Moneda:</strong> ARS</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> ${cajasDisponibles[i].balance}</p>
                            <p class="card-text mb-1"><strong>Descubierto disponible:</strong>${cajasDisponibles[i].uncoveredLimit}</p>
                            <p class="card-text mb-1"><strong>Descubierto usado:</strong>${cajasDisponibles[i].overdraft}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${cajasDisponibles[i].alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${cajasDisponibles[i].cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
            // }
            // else{console.log("uhhhh")}
        }
}