import React from 'react';
import {connect} from "react-redux";
import {getActiveFilter, getTickets} from "../../reducer/data/selectors";
import {ActionCreator} from "../../reducer/data/data";

function Checkbox({tickets, item, activeFilterType, changeFilter, setFilteredTickets}) {

    const handlerChangeFilter = (evt, filter) => {
        if (evt.target.checked) {
            if (!activeFilterType.includes(filter)) {
                activeFilterType.push(filter)
            }
        } else {
            if (activeFilterType.includes(filter)) {
                activeFilterType = activeFilterType.filter(item => item !== filter);
            }
        }

        changeFilter(activeFilterType);
        setFilteredTickets(tickets, activeFilterType);
    };

    return (
        <div className="transfer__checkbox checkbox">
            <input id={item.value} className="checkbox__input" name="count-transfer" type="checkbox"
                   value={item.value} defaultChecked={item.checked} onChange={(evt) => handlerChangeFilter(evt, item.count)}/>
            <label htmlFor={item.value} className="checkbox__label">{item.title}</label>
        </div>
    );
}

const mapStateToProps = (state) => ({
    tickets: getTickets(state),
    activeFilterType: getActiveFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
    changeFilter(activeFilterType) {
        dispatch(ActionCreator.changeFilterType(activeFilterType));
    },
    setFilteredTickets(tickets, filterType) {
        dispatch(ActionCreator.filteredTickets(tickets, filterType));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
