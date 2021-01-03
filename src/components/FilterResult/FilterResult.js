import FilterSort from "../FilterSort/FilterSort";
import FilterResultList from "../FilterResultList/FilterResultList";

function FilterResult() {
    return (
        <div className="filter__result">
            <FilterSort />
            <FilterResultList />
        </div>
    );
}

export default FilterResult;