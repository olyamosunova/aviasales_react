import React from "react";
import './tickets.css';
import {connect} from "react-redux";
import FilterResultItem from "../FilterResultItem/FilterResultItem";
import {getTickets} from "../../reducer/data/selectors";

function FilterResultList({tickets}) {
    console.log(tickets);
    return (
        <ul className="filter__result-list tickets">
            {[0, 1, 2].map((ticket, index) => (
                <FilterResultItem key={index} />
            ))}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        tickets: getTickets(state)
    };
};

export {FilterResultList};
export default connect(mapStateToProps)(FilterResultList);
