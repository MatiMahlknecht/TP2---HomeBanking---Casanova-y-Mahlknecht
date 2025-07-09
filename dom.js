cajasDisponibles = []
class UserInterface {
    constructor() {
    }

    getDni() {
        return document.getElementById("loginDni").value;
    }

    getContraseña() {
        return document.getElementById("loginPassword").value;
    }

    getRegisterName() {
        return document.getElementById("registerName").value;
    }
    getRegisterLastName() {
        return document.getElementById("registerLastName").value;
    }
    getRegisterDni() {
        return document.getElementById("registerDni").value;
    }
    getRegisterPassword() {
        return document.getElementById("registerPassword").value;
    }
    getRegisterEmail() {
        return document.getElementById("registerEmail").value;
    }



    /**
    * Muestra el modal y le inserta los textos que se reciben como parámetros.
    * @param {String} title Título que se quiere mostrar en el modal.
    * @param {String} body Texto del cuerpo del modal.
    */
    showModal(title, body) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalBody").textContent = body;

        const modal = new bootstrap.Modal('#modal', {
            keyboard: true,
            focus: true
        });
        modal.show();
    }

    changeScreen() {
        const information = document.getElementById("informacion");
        const loginForm = document.getElementById("login");
        const hamburguer = document.getElementById("hamburguesaBoton");
        const barraLateral = document.getElementById("offcanvasMenu")
        if (information.style.display == "none" && loginForm.style.display == "" && hamburguer.style.display == "none") {
            information.style.display = "";
            loginForm.style.display = "none";
            hamburguer.style.display = ""
            // this.clearAllNotes();
            // this.clearSelect();
        }
        else {
            information.style.display = "none";
            loginForm.style.display = "";
            hamburguer.style.display = "none"
            barraLateral.style.display = "none"
        }
    }
    completeAccounts(usuarioLogueado, cajasDelUsuario) {
        cajasDisponibles = cajasDelUsuario
        for (let i = 0; i < cajasDisponibles.length; i++) {
            if (cajasDisponibles[i].currency == "ARS") {

                document.getElementById("rowAccounts").innerHTML += `
                    <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en Pesos</h5>  
                            <p class="card-text mb-1"><strong>Moneda:</strong> ${cajasDisponibles[i].currency}</p>
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
            }
            else {
                document.getElementById("rowAccounts").innerHTML += `
                    <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en Dólares</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong>  ${cajasDisponibles[i].currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> U$D ${cajasDisponibles[i].balance}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${cajasDisponibles[i].alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${cajasDisponibles[i].cbu}</p>
                            <div class="d-grid">
                                <button class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div>`
            }
        }
    }




}
const ui = new UserInterface();