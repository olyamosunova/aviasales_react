import React from "react";
import moment from "moment";
import {formatDuration} from "../../utils";

function TransferItem({segment}) {
    const {origin, destination, date, stops, duration} = segment;

    let timeEnd = new Date(date);
    timeEnd.setMinutes(timeEnd.getMinutes() + duration);

    return (
        <li className="tickets__transfers-item">
            <div className="tickets__transfers-fields">
                <span className="tickets__transfers-field">{origin} – {destination}</span>
                <span className="tickets__transfers-field">{moment(new Date(date)).format('hh:mm')} – {moment(new Date(timeEnd)).format('hh:mm')}</span>
            </div>
            <div className="tickets__transfers-fields">
                <span className="tickets__transfers-field">В пути</span>
                <span className="tickets__transfers-field">{formatDuration(duration)}</span>
            </div>
            <div className="tickets__transfers-fields">

                <span className="tickets__transfers-field">{stops.length ? `${stops.length} пересадки` : 'Без пересадок'}</span>

                {stops.length ? <span className="tickets__transfers-field">{stops.map(stop => `${stop}, `)}</span> : ''}

            </div>
        </li>
    );
}

export default TransferItem;
