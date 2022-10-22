let RowHtmlFunc = async () => {
    let response = await fetch("Laundry/Booking/ShowAll/Today/Html/Hbs/Row.html");
    let data = await response.text();

    return await data;

};
export{RowHtmlFunc};