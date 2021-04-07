import {extend} from "../../utils";
import {TRANSFER_FILTER_TITLES, SORT_TYPE} from "../../const";
import {loadTickets} from "../../utils";

const initialState = {
    tickets: [],
    filteredTickets: null,
    isLoading: true,
    isError: false,
    activeFilterType: [TRANSFER_FILTER_TITLES.ALL.count],
    errorFilterMessage: '',
    activeSortType: SORT_TYPE.CHEAPER
};

const ActionType = {
    LOAD_TICKETS: `LOAD_TICKETS`,
    FINISH_LOADING: `FINISH_LOADING`,
    CATCH_ERROR: `CATCH_ERROR`,
    CLEAR_ERROR: `CLEAR_SENDING_ERROR`,
    FILTERED_TICKETS: `FILTERED_TICKETS`,
    CHANGE_FILTER_TYPE: `CHANGE_FILTER_TYPE`,
    CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
    SET_TICKETS_BY_SORT: `SET_TICKETS_BY_SORT`
};

const ActionCreator = {
    loadTickets: (tickets) => {
        return {
            type: ActionType.LOAD_TICKETS,
            payload: tickets,
        };
    },
    finishLoading: () => {
        return {
            type: ActionType.FINISH_LOADING,
            payload: false,
        }
    },
    catchError: () => {
        return {
            type: ActionType.CATCH_ERROR,
            payload: true,
        }
    },
    clearError: () => {
        return {
            type: ActionType.CLEAR_ERROR,
            payload: false,
        }
    },
    filteredTickets: (tickets, activeFilterType) => {

        let filteredTickets = [];

        if (!activeFilterType.length) {
            filteredTickets = [];
        }

        filteredTickets = tickets.filter(ticket => {
            if (activeFilterType.includes(TRANSFER_FILTER_TITLES.ALL.count)) {
                return ticket;
            }

            if (activeFilterType.includes(ticket.segments[0].stops.length) && activeFilterType.includes(ticket.segments[1].stops.length)) {
                return ticket;
            }
        });

        return {
            type: ActionType.FILTERED_TICKETS,
            payload: filteredTickets,
        };
    },
    changeFilterType: (activeFilterType) => {
        return {
            type: ActionType.CHANGE_FILTER_TYPE,
            payload: activeFilterType,
        };
    },
    changeSortType: (activeSortType) => {
        return {
            type: ActionType.CHANGE_SORT_TYPE,
            payload: activeSortType,
        };
    },
    setTicketsBySort: (tickets, sortType) => {
        const sortTickets = tickets;

        return {
            type: ActionType.SET_TICKETS_BY_SORT,
            payload: sortTickets,
        };
    }

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_TICKETS:
            const tickets = [...state.tickets, ...action.payload];

            return extend(state, {
                tickets: tickets,
            });
        case ActionType.FINISH_LOADING:
            return extend(state, {
                isLoading: action.payload,
            });
        case ActionType.CATCH_ERROR:
            return extend(state, {
                isError: action.payload,
            });
        case ActionType.CLEAR_ERROR:
            return extend(state, {
                isError: action.payload,
            });

        case ActionType.FILTERED_TICKETS:
            return extend(state, {
                filteredTickets: action.payload,
            });

        case ActionType.CHANGE_FILTER_TYPE:
            return extend(state, {
                activeFilterType: action.payload,
            });

        case ActionType.CHANGE_SORT_TYPE:
            return extend(state, {
                activeSortType: action.payload,
            });

        case ActionType.SET_TICKETS_BY_SORT:
            return extend(state, {
                tickets: action.payload,
            });


        default:
            return state;
    }
};

const Operations = {
    loadTickets: () => (dispatch, getState, api) => {
        return api.get(`/search`)
            .then((response) => {
                const id = response.data.searchId;
                loadTickets(api, dispatch, id);
            })
            .catch(() => {
                dispatch(ActionCreator.catchError());
            });
    }
};


export {reducer, ActionType, ActionCreator, Operations, initialState};
