class UserInterface {
    constructor() {
    }

    getDni(){
        return document.getElementById("loginDni").value;
    }

    getContraseña(){
        return document.getElementById("loginPassword").value;
    }

    getRegisterName(){
        return document.getElementById("registerName").value;
    }
    getRegisterLastName(){
        return document.getElementById("registerLastName").value;
    }
    getRegisterDni(){
        return document.getElementById("registerDni").value;
    }
    getRegisterPassword(){
        return document.getElementById("registerPassword").value;
    }
    getRegisterEmail(){
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
        const loginForm = document.getElementById("loggin");
        const hamburguer = document.getElementById("hamburguesaBoton");
        if (information.style.display == "none") {
                information.style.display = "";
                loginForm.style.display = "none";
                hamburguer.style.display = ""
            // this.clearAllNotes();
            // this.clearSelect();
        }
        else {
            information.style.display = "none";
            loginForm.style.display = "";
            hamburguer.style.display = "else"
        }
    }

}
const ui = new UserInterface();