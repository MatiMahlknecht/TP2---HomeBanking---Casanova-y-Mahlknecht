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
    const offcanvasElement = document.getElementById("menuLateral");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement)
        || new bootstrap.Offcanvas(offcanvasElement)
    offcanvasInstance.hide()
}

function fillItems(id) {
    let opcionesCuentas = ""
    let opcionesDebitCards = ""
    let client = findClient(id)
    let savingBanks = findSavingBanks(id)
    let debitCards = findDebitCards(id)
    
                    opcionesCuentas += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100" >
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en pesos</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong> ${clients[i].savingBanks[j].currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> ${clients[i].savingBanks[j].balance}</p>
                            <p class="card-text mb-1"><strong>Descubierto disponible:</strong> ${clients[i].savingBanks[j].uncoveredLimit}</p>
                            <p class="card-text mb-1"><strong>Descubierto usado:</strong> ${clients[i].savingBanks[j].overdraft}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${clients[i].savingBanks[j].alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${clients[i].savingBanks[j].cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div >
            `
                } else {
                    opcionesCuentas += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100" >
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en dólares</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong> ${clients[i].savingBanks[j].currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> ${clients[i].savingBanks[j].balance}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${clients[i].savingBanks[j].alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${clients[i].savingBanks[j].cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div >
            `
                }
                for (let k = 0; k < clients[i].savingBanks[j].debitCards.length; k++){
                    opcionesDebitCards +=`<option value = ${clients[i].savingBanks[j].debitCards[k].id}>${clients[i].savingBanks[j].debitCards[k].number}, ${clients[i].savingBanks[j].debitCards[k].securityNumber}, ${clients[i].savingBanks[j].debitCards[k].provider}</option> `
                }
            }
        }
    }
    console.log(opcionesDebitCards)
    document.getElementById("rowAccounts").innerHTML = opcionesCuentas
    document.getElementById("debitCardAccountSelect").innerHTML = opcionesDebitCards


}


document.getElementById("bankAccount").style.display = 'none'
document.getElementById("menuHamburguesa").style.display = 'none'