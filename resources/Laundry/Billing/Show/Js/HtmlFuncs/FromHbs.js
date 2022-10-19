let BillingHtmlFunc = async () => {
    let jVarLocalFetchUrl = "Laundry/Billing/Show/Html/Hbs/BillingShow.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();
    return await data;
};
export{ BillingHtmlFunc };
