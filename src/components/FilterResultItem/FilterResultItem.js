import React from "react";
import TransferList from "../TransferList/TransferList";

function FilterResultItem({ticket}) {
    const {price, carrier, segments} = ticket;
    return (
        <li className="tickets__item">
            <div className="tickets__link">
                <div className="tickets__item-header">
                    <span className="tickets__item-cost">{String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")} Р </span>

                    <img className="tickets__item-carrier" src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
                </div>

                <TransferList segments={segments} />
            </div>
        </li>
    );
}

export default FilterResultItem;
