import './transfer.css';
import './checkbox.css';

function FilterTransfer() {
    return (
        <div className="filter__transfer transfer">
            <p className="transfer__title">Количество пересадок</p>

            <form className="transfer__form">
                <div className="transfer__checkbox checkbox">
                    <input id="all-transfer" className="checkbox__input" name="count-transfer" type="checkbox"
                           value="all-transfer"/>
                    <label htmlFor="all-transfer" className="checkbox__label">Все</label>
                </div>
                <div className="transfer__checkbox checkbox">
                    <input id="not-transfer" className="checkbox__input" name="count-transfer" type="checkbox"
                           value="not-transfer"/>
                    <label htmlFor="not-transfer" className="checkbox__label">Без пересадок</label>
                </div>
                <div className="transfer__checkbox checkbox">
                    <input id="one-transfer" className="checkbox__input" name="count-transfer" type="checkbox"
                           value="one-transfer"/>
                    <label htmlFor="one-transfer" className="checkbox__label">1 пересадка</label>
                </div>
                <div className="transfer__checkbox checkbox">
                    <input id="two-transfer" className="checkbox__input" name="count-transfer" type="checkbox"
                           value="two-transfer"/>
                    <label htmlFor="two-transfer" className="checkbox__label">2 пересадка</label>
                </div>
                <div className="transfer__checkbox checkbox">
                    <input id="three-transfer" className="checkbox__input" name="count-transfer" type="checkbox"
                           value="three-transfer"/>
                    <label htmlFor="three-transfer" className="checkbox__label">3 пересадка</label>
                </div>
            </form>
        </div>
    );
}

export default FilterTransfer;