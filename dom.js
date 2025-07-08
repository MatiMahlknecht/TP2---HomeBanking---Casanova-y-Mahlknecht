class UserInterface {
    constructor() {
    }

    getDni(){
        return document.getElementById("loginDni").value;
    }

    getContraseña(){
        return document.getElementById("loginPassword").value;
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



}
const ui = new UserInterface();