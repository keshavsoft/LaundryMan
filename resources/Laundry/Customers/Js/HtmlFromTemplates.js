let CustomersHeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Customers/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export{CustomersHeaderHtmlFunc};