import React from "react";
import logo from "./S7-logo.svg";
import TransferList from "../TransferList/TransferList";

function FilterResultItem() {
    return (
        <li className="tickets__item">
            <div className="tickets__link">
                <div className="tickets__item-header">
                    <span className="tickets__item-cost">13 400 Р </span>

                    <img className="tickets__item-carrier" src={logo} alt="Company" />
                </div>

                <TransferList />
            </div>
        </li>
    );
}

export default FilterResultItem;
