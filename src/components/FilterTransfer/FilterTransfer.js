import React from 'react';
import './transfer.css';
import './checkbox.css';
import Checkbox from "../Checkbox/Checkbox";
import {TRANSFER_FILTER_TITLES} from "../../const";

function FilterTransfer() {
    return (
        <div className="filter__transfer transfer">
            <p className="transfer__title">Количество пересадок</p>

            <form className="transfer__form">
                {Object.keys(TRANSFER_FILTER_TITLES).map(item => <Checkbox item={TRANSFER_FILTER_TITLES[item]} key={TRANSFER_FILTER_TITLES[item].title} />)}
            </form>
        </div>
    );
}

export default FilterTransfer;
