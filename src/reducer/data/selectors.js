import NameSpace from "../name-space";

export const getTickets = (state) => state[NameSpace.DATA].tickets;
export const getActiveFilter = (state) => state[NameSpace.DATA].activeFilterType;
export const getFilteredTickets = (state) => state[NameSpace.DATA].filteredTickets;
export const getActiveSortType = (state) => state[NameSpace.DATA].activeSortType;
