function TransferItem() {
    return (
        <li className="tickets__transfers-item">
            <div className="tickets__transfers-fields">
                <span className="tickets__transfers-field">MOW – HKT</span>
                <span className="tickets__transfers-field">10:45 – 08:00</span>
            </div>
            <div className="tickets__transfers-fields">
                <span className="tickets__transfers-field">В пути</span>
                <span className="tickets__transfers-field">21ч 15м</span>
            </div>
            <div className="tickets__transfers-fields">
                <span className="tickets__transfers-field">2 пересадки</span>
                <span className="tickets__transfers-field">HKG, JNB</span>
            </div>
        </li>
    );
}

export default TransferItem;