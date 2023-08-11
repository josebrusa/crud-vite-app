import {renderAddBtn} from "./presentation/render-add-btn/renderAddBtn";
import {renderBtn} from "./presentation/render-btn/renderBtn";
import {renderModal} from "./presentation/render-modal/render-modal";
import {renderTable} from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import {saveUser} from "./use-cases/save-users-by-page";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
    element.innerHTML = "Loading...";
    await usersStore.loadNextPage();
    element.innerHTML = "";
    renderTable(element);
    renderBtn(element);
    renderAddBtn(element);
    renderModal(element, async (userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable();
    });
};
