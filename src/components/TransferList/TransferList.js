import React from "react";
import TransferItem from "../TransferItem/TransferItem";

function TransferList() {
    return (
        <ul className="tickets__transfers">
            {[0, 1, 2].map((item, index) => (
                <TransferItem key={index} />
            ))}
        </ul>
    );
}

export default TransferList;
