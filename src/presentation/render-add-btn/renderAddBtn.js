import "./renderAddBtn.css";

/**
 *
 * @param {HTMLDivElement} element
 * @param { () => void } callback
 */
export const renderAddBtn = (element) => {
    const fabBtn = document.createElement("button");
    fabBtn.innerText = "+";
    fabBtn.classList.add("fab-Btn");

    element.append(fabBtn);

    //TODO:

    fabBtn.addEventListener("click", () => {
        throw Error("no implementado");
    });
};
