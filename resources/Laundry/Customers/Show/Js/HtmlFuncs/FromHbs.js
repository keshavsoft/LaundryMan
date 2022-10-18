let CustomersHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Customers/Show/Html/Hbs/Customers.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

 export {CustomersHtmlFunc};