import React from "react";
import TransferItem from "../TransferItem/TransferItem";

function TransferList({segments}) {
    return (
        <ul className="tickets__transfers">
            {segments.map((segment, index) => (
                <TransferItem segment={segment} key={index} />
            ))}
        </ul>
    );
}

export default TransferList;
