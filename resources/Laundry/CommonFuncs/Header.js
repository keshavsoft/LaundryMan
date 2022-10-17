let ChangeClassFunc = ({ inHtmlControl }) => {
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
};

export { ChangeClassFunc };