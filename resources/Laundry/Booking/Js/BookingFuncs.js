import { KSGlobalMenuClass } from "../../MenuFuncs";
import { DalBookingFuncsClass } from "../../../Dal/Bookings/JsonFuncs";

class KSGlobalBookingClass {
    static JSFuncs = {
        Show: async () => {
            let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

            let LocalDataFromJson = await DalBookingFuncsClass.ShowTodayFunc();
            let LocalSNo = 1;

            Object.entries(LocalDataFromJson.JsonData).forEach(
                ([key, value]) => {
                    LocalReturnObject.JsonData[key] = value;
                    LocalReturnObject.JsonData[key].SNo = LocalSNo;
                    LocalSNo += 1;
                }
            );

            LocalReturnObject.KTF = true;

            return await LocalReturnObject;

        },
        ShowDataForDelete: async () => {
            let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

            let LocalDataFromJson = await DalFuncsClass.Booking.ShowDataForDelete();
            let LocalSNo = 1;

            Object.entries(LocalDataFromJson.JsonData).forEach(
                ([key, value]) => {
                    LocalReturnObject.JsonData[key] = value;
                    LocalReturnObject.JsonData[key].SNo = LocalSNo;
                    LocalSNo += 1;
                }
            );

            LocalReturnObject.KTF = true;

            return await LocalReturnObject;

        }
    };

    static ApiFuncs = {
        ShowinDOM: {
            Insert: async (inEvent) => {
                if ((inEvent === undefined) === false) {
                    let jVarLocalCurrentTarget = inEvent.currentTarget;
                    this.CommonFuncs.Ui.Html.DOM.Header.ChangeClass({ inHtmlControl: jVarLocalCurrentTarget });
                };

                let jVarLocalFromHbs = await this.HtmlFuns.Templates.Insert();

                let jVarLocalKCont1 = document.getElementById("KCont1");
                jVarLocalKCont1.innerHTML = jVarLocalFromHbs;

                await this.ApiFuncs.ShowinDOM.CommonFuncs.AddListeners();
            },
            CommonFuncs: {
                AddListeners: () => {
                    let jVarLocalBookingSaveButtonId = document.getElementById("BookingSaveButtonId");

                    jVarLocalBookingSaveButtonId.addEventListener("click", this.ApiFuncs.ShowinDOM.CommonFuncs.ListenerFuncs.SaveFunc);
                },
                ListenerFuncs: {
                    SaveFunc: async () => {
                        let jVarLocalObject = {};

                        let LocalBookingDetails = jFBookingDetails();
                        if (LocalBookingDetails.KTF) {
                            jVarLocalObject = LocalBookingDetails.KResult
                        };

                        jVarLocalObject.QrCodes = {};

                        let LocalGarmentsFirstRow = jFGarmentsFirstRow();
                        if (LocalGarmentsFirstRow.KTF) {
                            jVarLocalObject.QrCodes[1] = LocalGarmentsFirstRow.KResult
                        };
                        let LocalGarmentsSecondRow = jFGarmentsSecondRow();
                        if (LocalGarmentsSecondRow.KTF) {
                            jVarLocalObject.QrCodes[2] = LocalGarmentsSecondRow.KResult
                        };
                        let LocalGarmentsThirdRow = jFGarmentsThirdRow();
                        if (LocalGarmentsThirdRow.KTF) {
                            jVarLocalObject.QrCodes[3] = LocalGarmentsThirdRow.KResult
                        };
                        let LocalGarmentsFourthRow = jFGarmentsFourthRow();
                        if (LocalGarmentsFourthRow.KTF) {
                            jVarLocalObject.QrCodes[4] = LocalGarmentsFourthRow.KResult
                        };
                        let LocalGarmentsFifthRow = jFGarmentsFifthRow();
                        if (LocalGarmentsFifthRow.KTF) {
                            jVarLocalObject.QrCodes[5] = LocalGarmentsFifthRow.KResult
                        };
                        let LocalGarmentsSixthRow = jFGarmentsSixthRow();
                        if (LocalGarmentsSixthRow.KTF) {
                            jVarLocalObject.QrCodes[6] = LocalGarmentsSixthRow.KResult
                        };
                        let LocalGarmentsSeventhRow = jFGarmentsSeventhRow();
                        if (LocalGarmentsSeventhRow.KTF) {
                            jVarLocalObject.QrCodes[7] = LocalGarmentsSeventhRow.KResult
                        };
                        let LocalGarmentsEightRow = jFGarmentsEightRow();
                        if (LocalGarmentsEightRow.KTF) {
                            jVarLocalObject.QrCodes[8] = LocalGarmentsEightRow.KResult
                        };
                        let LocalGarmentsNinethRow = jFGarmentsNinethRow();
                        if (LocalGarmentsNinethRow.KTF) {
                            jVarLocalObject.QrCodes[9] = LocalGarmentsNinethRow.KResult
                        };
                        let LocalGarmentsTenthRow = jFGarmentsTenthRow();
                        if (LocalGarmentsTenthRow.KTF) {
                            jVarLocalObject.QrCodes[10] = LocalGarmentsTenthRow.KResult
                        };

                        let jVarLocalFromInsert = await DalBookingFuncsClass.InsertSaveFunc({ jVarLocalObject });
                    }
                }
            }
        },
        QrCode: {
            ShowAll: async (inEvent) => {
                if ((inEvent === undefined) === false) {
                    let jVarLocalCurrentTarget = inEvent.currentTarget;
                    this.CommonFuncs.Ui.Html.DOM.Header.ChangeClass({ inHtmlControl: jVarLocalCurrentTarget });
                };

                let jVarLocalFromTemplate = await this.HtmlFuns.Hbs.QrCode();

                var template = Handlebars.compile(jVarLocalFromTemplate);

                let jVarLocalDataNeeded = await this.JSFuncs.Show();
                if (jVarLocalDataNeeded.KTF === false) {

                };

                let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

                document.getElementById("KCont1").innerHTML = jVarLocalHtml;
                this.ApiFuncs.QrCode.CommonFuncs.AddListeners();
            },
            ToModal: async ({ inRowPK }) => {
                let jVarLocalDataNeeded = await DalBookingFuncsClass.PickFunc({ inRowPK });

                if (jVarLocalDataNeeded.KTF) {
                    let jVarLocalModalBody = document.getElementById("ModalBody");

                    let jVarLocalFromTemplate = await this.HtmlFuns.Hbs.QrCodeModalPopUp();

                    var template = Handlebars.compile(jVarLocalFromTemplate);
                    jVarLocalDataNeeded.KResult.PK = inRowPK;
                    jVarLocalModalBody.innerHTML = template(jVarLocalDataNeeded.KResult);

                    // let jVarLocalModalCustomerName = document.getElementById("ModalCustomerName");
                    // let jVarLocalModalPK = document.getElementById("ModalPK");
                    // let jVarLocalModalGarments = document.getElementById("ModalGarments");
                    // let jVarLocalModalWeight = document.getElementById("ModalWeight");
                    // let jVarLocalModalMobile = document.getElementById("ModalMobile");

                    // jVarLocalModalCustomerName.innerHTML = jVarLocalDataNeeded.KResult.CustomerName;
                    // jVarLocalModalPK.innerHTML = inRowPK;
                    // jVarLocalModalGarments.innerHTML = jVarLocalDataNeeded.KResult.Garments;
                    // jVarLocalModalWeight.innerHTML = `${jVarLocalDataNeeded.KResult.Weight} Kg.`;
                    // jVarLocalModalMobile.innerHTML = jVarLocalDataNeeded.KResult.Mobile;

                    let jVarLocalQrData = `${inRowPK}/${jVarLocalDataNeeded.KResult.CustomerName}/${jVarLocalDataNeeded.KResult.Mobile}/${jVarLocalDataNeeded.KResult.Garments}/${jVarLocalDataNeeded.KResult.Weight}`;
                    // this.CommonFuncs.QrCode.GenerateQrCodeOnCanvas({ inQrData: jVarLocalQrData });

                    Object.entries(jVarLocalDataNeeded.KResult.QrCodes).forEach(
                        ([key, value]) => {
                            let jVarLocalHtmlQr = document.getElementById(`${inRowPK}-${key}`);
                            let jVarLocalQrData = `${inRowPK}-${key}/${jVarLocalDataNeeded.KResult.CustomerName}/${jVarLocalDataNeeded.KResult.Mobile}/${jVarLocalDataNeeded.KResult.Garments}/${jVarLocalDataNeeded.KResult.Weight}`;
                            this.CommonFuncs.QrCode.GenerateQrCodeOnModal({
                                inQrData: jVarLocalQrData,
                                inCanvasId: jVarLocalHtmlQr
                            });
                        }
                    );

                    let jVarLocalId = "ModalForQrCode";

                    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

                    myModal.show();
                };

            },
            ToModal1Inch: async ({ inRowPK }) => {
                let jVarLocalDataNeeded = await DalBookingFuncsClass.PickFunc({ inRowPK });

                if (jVarLocalDataNeeded.KTF) {
                    let jVarLocalModalCustomerName = document.getElementById("ModalCustomerName");
                    let jVarLocalModalPK = document.getElementById("ModalPK");
                    let jVarLocalModalGarments = document.getElementById("ModalGarments");
                    let jVarLocalModalWeight = document.getElementById("ModalWeight");
                    let jVarLocalModalMobile = document.getElementById("ModalMobile");

                    jVarLocalModalCustomerName.innerHTML = jVarLocalDataNeeded.KResult.CustomerName;
                    jVarLocalModalPK.innerHTML = inRowPK;
                    jVarLocalModalGarments.innerHTML = jVarLocalDataNeeded.KResult.Garments;
                    jVarLocalModalWeight.innerHTML = `${jVarLocalDataNeeded.KResult.Weight} Kg.`;
                    jVarLocalModalMobile.innerHTML = jVarLocalDataNeeded.KResult.Mobile;

                    let jVarLocalQrData = `${inRowPK}/${jVarLocalDataNeeded.KResult.CustomerName}/${jVarLocalDataNeeded.KResult.Mobile}/${jVarLocalDataNeeded.KResult.Garments}/${jVarLocalDataNeeded.KResult.Weight}`;
                    this.CommonFuncs.QrCode.GenerateQrCodeOnCanvas({ inQrData: jVarLocalQrData });

                    let jVarLocalId = "ModalForQrCode";

                    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

                    myModal.show();
                };

            },
            CommonFuncs: {
                AddListeners: () => {
                    let jVarLocalQrCodeButtonClass = document.getElementsByClassName("QrCodeButtonClass");

                    for (var i = 0; i < jVarLocalQrCodeButtonClass.length; i++) {
                        jVarLocalQrCodeButtonClass[i].addEventListener('click', async (inEvent) => {
                            let jVarInsideCurrentTarget = inEvent.currentTarget;
                            let jVarInsideClosestTr = jVarInsideCurrentTarget.closest("tr");
                            let jVarInsideQrCodeValue = jVarInsideClosestTr.dataset.qrcode;
                            this.ApiFuncs.QrCode.ToModal({ inRowPK: jVarInsideQrCodeValue });
                        });
                    };
                }
            }
        },
        ShowDataForDelete: async (inEvent) => {
            if ((inEvent === undefined) === false) {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                this.CommonFuncs.Ui.Html.DOM.Header.ChangeClass({ inHtmlControl: jVarLocalCurrentTarget });
            };

            let jVarLocalFromTemplate = await this.Booking.HtmlFuns.Hbs.ShowDataForDelete();

            var template = Handlebars.compile(jVarLocalFromTemplate);

            let jVarLocalDataNeeded = await this.Booking.JSFuncs.Show();

            if (jVarLocalDataNeeded.KTF === false) {

            };

            let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

            document.getElementById("KCont1").innerHTML = jVarLocalHtml;
        },
        ShowAll: async (inEvent) => {
            if ((inEvent === undefined) === false) {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                this.CommonFuncs.Ui.Html.DOM.Header.ChangeClass({ inHtmlControl: jVarLocalCurrentTarget });
            };

            let jVarLocalFromTemplate = await this.HtmlFuns.Hbs.ShowAll();

            var template = Handlebars.compile(jVarLocalFromTemplate);

            let jVarLocalDataNeeded = await this.JSFuncs.Show();

            if (jVarLocalDataNeeded.KTF === false) {

            };

            let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

            document.getElementById("KCont1").innerHTML = jVarLocalHtml;
        },
        Show: async (inEvent) => {
            if ((inEvent === undefined) === false) {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                this.CommonFuncs.Ui.Html.DOM.Header.ChangeClass({ inHtmlControl: jVarLocalCurrentTarget });
            };

            await this.Booking.HtmlFuns.Templates.Show();
            let jVarLocalDataNeeded = await this.Booking.JSFuncs.Show();
            let jVarLocalFromHbs = await this.Booking.HtmlFuns.Hbs.Row();

            if (jVarLocalDataNeeded.KTF === false) {

            };

            var template = Handlebars.compile(jVarLocalFromHbs);
            let jVarLocalHtml = template(jVarLocalDataNeeded.JsonData);

            document.getElementById("KTableBody").innerHTML = jVarLocalHtml;
        },
        Header: {
            ShowinDOM: async () => {
                let jVarLocalFromHbs = await this.HtmlFuns.Templates.Header.PullFunc();

                let jVarLocalKCont1 = document.getElementById("KHeader");
                jVarLocalKCont1.innerHTML = jVarLocalFromHbs;
                this.ApiFuncs.Header.CommonFuncs.AddListeners();
            },
            CommonFuncs: {
                AddListeners: () => {
                    let jVarLocalHomeId = document.getElementById("HomeId");
                    jVarLocalHomeId.addEventListener("click", async () => {
                        await KSGlobalMenuClass.ApiFuncs.Header.BuildMenu();

                        let jVarLocalKCont1 = document.getElementById("KCont1");
                        jVarLocalKCont1.innerHTML = "";

                    });
                    let jVarLocalBookingHeaderTodayId = document.getElementById("BookingHeaderTodayId");
                    jVarLocalBookingHeaderTodayId.addEventListener("click", this.ApiFuncs.Show);

                    let jVarLocalBookingHeaderShowAllId = document.getElementById("BookingHeaderShowAllId");
                    jVarLocalBookingHeaderShowAllId.addEventListener("click", this.ApiFuncs.ShowAll);

                    let jVarLocalBookingHeaderInsertId = document.getElementById("BookingHeaderInsertId");
                    jVarLocalBookingHeaderInsertId.addEventListener("click", this.ApiFuncs.ShowinDOM.Insert);

                    let jVarLocalBookingHeaderQrCodeId = document.getElementById("BookingHeaderQrCodeId");
                    jVarLocalBookingHeaderQrCodeId.addEventListener("click", this.ApiFuncs.QrCode.ShowAll);

                }

            }
        },
        MenuItemClick: {
            HomeClick: async () => {
                let jVarLocalFromHbs = await this.HtmlFuns.Templates.Header.MenuItemClick.HomeClick();

                let jVarLocalKHeader = document.getElementById("KHeader");
                jVarLocalKHeader.innerHTML = jVarLocalFromHbs;
                let jVarLocalKCont1 = document.getElementById("KCont1");
                jVarLocalKCont1.innerHTML = "";
            }
        }
    };

    static HtmlFuns = {
        Templates: {
            Header: {
                MenuItemClick:
                {
                    HomeClick: async () => {
                        let jVarLocalFetchUrl = "Templates/Header.html";
                        let response = await fetch(jVarLocalFetchUrl);
                        let data = await response.text();
                        return await data;
                    }
                },
                PullFunc: async () => {
                    let jVarLocalFetchUrl = "Laundry/Booking/Html/Header.html";
                    let response = await fetch(jVarLocalFetchUrl);
                    let data = await response.text();
                    return await data;
                }
            },
            Show: async () => {
                let jVarLocalFetchUrl = "Laundry/Booking/Html/Templates/Show.html";
                let response = await fetch(jVarLocalFetchUrl);
                let data = await response.text();
                let jVarLocalKCont1 = document.getElementById("KCont1");
                jVarLocalKCont1.innerHTML = data;
            },
            Insert: async () => {
                let jVarLocalFetchUrl = "Laundry/Booking/Html/Templates/Insert.html";
                let response = await fetch(jVarLocalFetchUrl);
                let data = await response.text();
                return await data;
            }
        },
        Hbs: {
            Row: async () => {
                let response = await fetch("Laundry/Booking/Html/Hbs/Row.html");
                let data = await response.text();

                return await data;

            },
            QrCode: async () => {
                let jVarLocalFetchUrl = "Laundry/Booking/Html/Hbs/QrCode.html";
                let response = await fetch(jVarLocalFetchUrl);
                let data = await response.text();
                return await data;
            },
            QrCodeModalPopUp: async () => {
                let jVarLocalFetchUrl = "Laundry/Booking/Html/Hbs/QrCodeModalPopUp.html";
                let response = await fetch(jVarLocalFetchUrl);
                let data = await response.text();
                return await data;
            },
            ShowAll: async () => {
                let jVarLocalFetchUrl = "Laundry/Booking/Html/Hbs/ShowAll.html";
                let response = await fetch(jVarLocalFetchUrl);
                let data = await response.text();
                return await data;
            },
            ShowDataForDelete: async () => {
                let jVarLocalFetchUrl = "Laundry/Booking/Html/Hbs/Delete.html";
                let response = await fetch(jVarLocalFetchUrl);
                let data = await response.text();
                return await data;
            }
        }
    };

    static CommonFuncs = {
        QrCode: {
            GenerateQrCodeOnCanvas: ({ inQrData = "" }) => {
                var canvas = document.getElementById('canvas');
                canvas.height = 1;
                canvas.width = 1;
                canvas.style.visibility = 'hidden';

                // Convert the options to an object.
                let opts = {};

                // Finish up the options
                opts.text = inQrData;
                opts.bcid = "qrcode";
                opts.scaleX = 1;
                opts.scaleY = 1;
                opts.rotate = "N";

                // Draw the bar code to the canvas
                try {
                    let ts0 = new Date;
                    bwipjs.toCanvas(canvas, opts);
                    show(ts0, new Date);
                } catch (e) {
                    console.log("error : ", e);
                    // Watch for BWIPP generated raiseerror's.

                    return;
                }

                function show(ts0, ts1) {
                    canvas.style.visibility = 'visible';
                }
            },
            GenerateQrCodeOnModal: ({ inQrData = "", inCanvasId }) => {
                var canvas = inCanvasId;
                canvas.height = 1;
                canvas.width = 1;
                canvas.style.visibility = 'hidden';

                // Convert the options to an object.
                let opts = {};

                // Finish up the options
                opts.text = inQrData;
                opts.bcid = "qrcode";
                opts.scaleX = 1;
                opts.scaleY = 1;
                opts.rotate = "N";

                // Draw the bar code to the canvas
                try {
                    let ts0 = new Date;
                    bwipjs.toCanvas(canvas, opts);
                    show(ts0, new Date);
                } catch (e) {
                    console.log("error : ", e);
                    // Watch for BWIPP generated raiseerror's.

                    return;
                }

                function show(ts0, ts1) {
                    canvas.style.visibility = 'visible';
                }
            }
        },
        Ui: {
            Html: {
                DOM: {
                    Header: {
                        ChangeClass: ({ inHtmlControl }) => {
                            let jVarLocalClosestUl = inHtmlControl.closest("ul");
                            let jVarLocalQueryATags = jVarLocalClosestUl.querySelectorAll("a");
                            let jVarLocalClassName = "text-info";
                            let jVarLocalWhiteClassName = "text-white";

                            jVarLocalQueryATags.forEach((LoopElement) => {
                                if (LoopElement.classList.contains(jVarLocalClassName)) {
                                    LoopElement.classList.remove(jVarLocalClassName);
                                    LoopElement.classList.add(jVarLocalWhiteClassName);
                                };
                            });

                            inHtmlControl.classList.remove(jVarLocalWhiteClassName);
                            inHtmlControl.classList.add(jVarLocalClassName);
                        }
                    }
                }
            }
        }
    }
};

export { KSGlobalBookingClass };
