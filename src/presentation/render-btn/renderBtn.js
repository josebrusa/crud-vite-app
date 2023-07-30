import usersStore from "../../store/users-store";
import {renderTable} from "../render-table/render-table";
import "./renderBtn.css";

/**
 *
 * @param {HTMLDivElement} element
 */

export const renderBtn = (element) => {
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next >";
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "< Prev";

    const currentPageLabel = document.createElement("span");
    currentPageLabel.id = "current-page";
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(prevBtn, currentPageLabel, nextBtn);

    nextBtn.addEventListener("click", async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });

    prevBtn.addEventListener("click", async () => {
        await usersStore.loadPreviusPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
};
