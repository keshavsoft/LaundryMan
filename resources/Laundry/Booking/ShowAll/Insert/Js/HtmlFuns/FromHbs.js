let BookingInsertSuccessFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Booking/ShowAll/Insert/Html/Hbs/BookingInsertSuccess.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export { BookingInsertSuccessFunc }