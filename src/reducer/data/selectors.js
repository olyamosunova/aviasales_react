import NameSpace from "../name-space";

export const getSearchId = (state) => {
    return state[NameSpace.DATA].searchID;
};
export const getTickets = (state) => state[NameSpace.DATA].tickets;
