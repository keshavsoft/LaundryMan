import { DeleteFunc } from "../../../../Dal/Bookings/Delete";
import { ShowDatawithAlertForDelete } from "./ShowDatawithAlertForDelete";

let AddListeners = () => {
    let jVarLocalDeleteButtonClass = document.getElementsByClassName("DeleteButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtonClass.length; i++) {
        jVarLocalDeleteButtonClass[i].addEventListener('click', LocalDeleteFunc);
    };
};

let LocalDeleteFunc = async (inEvent) => {
    let jVarInsideCurrentTarget = inEvent.currentTarget;
    let jVarGetAttributeData = jVarInsideCurrentTarget.getAttribute("data-del");

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            let jVarLocalFromDal = await DeleteFunc({ inRowPK: jVarGetAttributeData });
            let jVarLocalDeleteDangerAlertId = document.getElementById("DeleteDangerAlertId");

            if (jVarLocalFromDal.KTF) {
                ShowDatawithAlertForDelete();
            } else {
                jVarLocalDeleteDangerAlertId.classList.remove("d-none");
            };
        }
    })
};

export { AddListeners };