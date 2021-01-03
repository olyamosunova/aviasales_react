import React, {Fragment} from "react";
import './tickets.css';
import {connect} from "react-redux";
import FilterResultItem from "../FilterResultItem/FilterResultItem";
import {getActiveSortType, getFilteredTickets, getTickets} from "../../reducer/data/selectors";
import {SORT_TYPE} from "../../const";

function FilterResultList({tickets, filteredTickets, activeSortType}) {
    let ticketsList = filteredTickets ? filteredTickets.splice(0, 5) : tickets.splice(0, 5);

    if (activeSortType === SORT_TYPE.CHEAPER) {
        ticketsList = ticketsList.sort(function(a, b) {
            return a.price - b.price;
        });
    } else {
        ticketsList = ticketsList.sort(function(a, b) {
            return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration);
        });
    }

    return (
        <Fragment>
            {filteredTickets && filteredTickets.length === 0 ?
                <p>По вашему запросу ничего не найдено</p> :

                <ul className="filter__result-list tickets">
                    {filteredTickets ? ticketsList.map((ticket, index) => (
                        <FilterResultItem ticket={ticket} key={index}/>
                    )) : ticketsList.map((ticket, index) => (
                        <FilterResultItem ticket={ticket} key={index}/>
                    ))}
                </ul>
            }
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        tickets: getTickets(state),
        filteredTickets: getFilteredTickets(state),
        activeSortType: getActiveSortType(state)
    };
};

export {FilterResultList};
export default connect(mapStateToProps)(FilterResultList);
