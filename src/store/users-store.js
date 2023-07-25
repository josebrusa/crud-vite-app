const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {
    throw new Error("No implimentado");
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
