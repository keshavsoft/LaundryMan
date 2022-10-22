let FindBookingtHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/ShowAll/FindBooking/Html/Hbs/FindBooking.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { FindBookingtHtmlFunc }