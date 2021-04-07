import {ActionCreator} from "./reducer/data/data";

export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

export const formatDuration = (duration) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
};

export const loadTickets = (api, dispatch, id) => {
    return api.get(`/tickets?searchId=${id}`)
        .then((response) => {
            let tickets = response.data.tickets;

            dispatch(ActionCreator.loadTickets(tickets));
            dispatch(ActionCreator.finishLoading());

            if (!response.data.stop) {
                loadTickets(api, dispatch, id);
            }
        })
        .catch(() => {
            dispatch(ActionCreator.catchError());
        });
};
