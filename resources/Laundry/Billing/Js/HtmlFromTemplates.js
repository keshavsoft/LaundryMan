let BillingHeaderHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Billing/Header.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};

export{BillingHeaderHtmlFunc};