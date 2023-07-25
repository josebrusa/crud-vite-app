import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {
    await loadUsersByPage(state.currentPage + 1);
};
const loadPreviusPage = async () => {
    throw new Error("No implimentado");
};
const onUserChanged = async () => {
    throw new Error("No implimentado");
};
const reloadPage = async () => {
    throw new Error("No implimentado");
};

export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
};
