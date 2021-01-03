import React from 'react';
import './filter.css';

import FilterTransfer from "../FilterTransfer/FilterTransfer";
import FilterResult from "../FilterResult/FilterResult";

function Filter() {
    return (
        <section className="filter">
            <FilterTransfer />
            <FilterResult />
        </section>
    );
}

export default Filter;
