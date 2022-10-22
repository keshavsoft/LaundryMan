let LastBookingtHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/ShowAll/LastBooking/Html/Hbs/LastBooking.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { LastBookingtHtmlFunc }