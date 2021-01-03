import React, {Fragment} from "react";
import './tickets.css';
import {connect} from "react-redux";
import FilterResultItem from "../FilterResultItem/FilterResultItem";
import {getFilteredTickets, getTickets} from "../../reducer/data/selectors";

function FilterResultList({tickets, filteredTickets}) {
    return (
        <Fragment>
            {filteredTickets && filteredTickets.length === 0 ?
                <p>По вашему запросу ничего не найдено</p> :

                <ul className="filter__result-list tickets">
                    {filteredTickets ? filteredTickets.map((ticket, index) => (
                        <FilterResultItem ticket={ticket} key={index}/>
                    )) : tickets.map((ticket, index) => (
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
        filteredTickets: getFilteredTickets(state)
    };
};

export {FilterResultList};
export default connect(mapStateToProps)(FilterResultList);
