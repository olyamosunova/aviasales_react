import {extend} from "../../utils";

const initialState = {
    tickets: [],
    isLoading: true,
    isError: false,
};

const ActionType = {
    LOAD_TICKETS: `LOAD_TICKETS`,
    FINISH_LOADING: `FINISH_LOADING`,
    CATCH_ERROR: `CATCH_ERROR`,
    CLEAR_ERROR: `CLEAR_SENDING_ERROR`,
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

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_TICKETS:
            return extend(state, {
                tickets: action.payload,
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

        default:
            return state;
    }
};

const Operations = {
    loadTickets: () => (dispatch, getState, api) => {
        return api.get(`/search`)
            .then((response) => {
                api.get(`/tickets?searchId=${response.data.searchId}`)
                    .then((response) => {
                        console.log(response.data);
                        dispatch(ActionCreator.loadTickets(response.data));
                        dispatch(ActionCreator.finishLoading());
                    })
                    .catch(() => {
                        dispatch(ActionCreator.catchError());
                    });
            })
            .catch(() => {
                dispatch(ActionCreator.catchError());
            });
    }
};


export {reducer, ActionType, ActionCreator, Operations, initialState};
