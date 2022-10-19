import { ToKCont1 } from "../Laundry/Booking/Insert/Js/ShowinDOM";
import { ToHeaderFunc } from "../Laundry/Booking/Js/InsertToDOM";
import { CheckFolderFunc } from "../Dal/test";
import { StartFunc } from "../Dal/Bookings/PullFuncs/WithCompleted";
import { ToDOMBodyFromPK } from "../Laundry/Booking/FindBooking/Js/FindBooking";

let jFShowInKLastRefreshDT = () => {
    let jVarLocalKLastRefreshDT = document.getElementById("KLastRefreshDT");
    jVarLocalKLastRefreshDT.innerHTML = new Date();
};

let jFStart = async () => {
    await ToHeaderFunc();
    await ToKCont1();
};

function askForApproval() {
    if (Notification.permission === "granted") {
        createNotification('Ouch!',
            'Data folder not found...',
            'https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png');
    }
    else {
        Notification.requestPermission(permission => {
            if (permission === 'granted') {
                createNotification('Ouch!',
                    'Data folder not found...',
                    'https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png');
            }
        });
    }
};

function createNotification(title, text, icon) {
    const noti = new Notification(title, {
        body: text,
        icon
    });
};

jFShowInKLastRefreshDT();

CheckFolderFunc().then(FromPromise => {
    if (FromPromise.KTF) {

        jFStart().then(p => {
            // ToDOMBodyFromPK({ inBookingPK: 3 }).then(p => {

            // })
        });

    } else {
        askForApproval();
        let jVarLocalAlertDangerId = document.getElementById("AlertDangerId");
        jVarLocalAlertDangerId.innerHTML = FromPromise.KReason;

        let jVarLocalShowOfflineSpinnerId = document.getElementById("ShowOfflineSpinnerId");
        jVarLocalShowOfflineSpinnerId.classList.remove("d-none")

    };
});

// QrCodeData().then(p => { console.log(p); })