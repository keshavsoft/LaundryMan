let FindBookingShowtHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/Today/FindBooking/Html/Hbs/FindBookingShow.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { FindBookingShowtHtmlFunc }