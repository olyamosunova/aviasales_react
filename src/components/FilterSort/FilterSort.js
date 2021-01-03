import React from 'react';
import classNames from 'classnames';
import {SORT_TYPE} from "../../const";
import {connect} from 'react-redux';
import {getActiveSortType} from "../../reducer/data/selectors";
import {ActionCreator} from "../../reducer/data/data";

function FilterSort({activeSortType, changeActiveSortType}) {
    const handlerChangeSortType = (type) => {
        changeActiveSortType(type);
    };

    return (
        <div className="filter__sort">
            <button onClick={() => handlerChangeSortType(SORT_TYPE.CHEAPER)} className={classNames({'filter__sort-button': true, 'filter__sort-button--active': activeSortType === SORT_TYPE.CHEAPER})} type="button">Самый дешевый</button>
            <button onClick={() => handlerChangeSortType(SORT_TYPE.FASTER)} className={classNames({'filter__sort-button': true, 'filter__sort-button--active': activeSortType === SORT_TYPE.FASTER})} type="button">Самый быстрый</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    activeSortType: getActiveSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
    changeActiveSortType: (type) => dispatch(ActionCreator.changeSortType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);
