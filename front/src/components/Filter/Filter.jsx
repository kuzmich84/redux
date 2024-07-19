import { useDispatch, useSelector } from 'react-redux'
import { setTitleFilter, selectTitleFilter, resetFilters, selectAuthorFilter, setAuthorFilter, selectOnlyFavoriteFilter, setOnlyFavoriteFilter } from '../../redux/slices/filterSlice'
import './Filter.css'

export default function Filter() {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }

    const handleResetFilters = () => {
        dispatch(resetFilters())
    }

    const handleOnlyFavoriteChange = () => {
        dispatch(setOnlyFavoriteFilter())
    }

    return (
        <div className='app-block filter'>
            <div className="filter-row">
                <div className="filter-group">
                    <input type="text" placeholder='Filter by title...' onChange={handleTitleFilterChange} value={titleFilter} />
                </div>
                <div className="filter-group">
                    <input type="text" placeholder='Filter by author...' onChange={handleAuthorFilterChange} value={authorFilter} />
                </div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteChange} />
                        Only Favorite
                    </label>
                </div>
                <button type="button" onClick={handleResetFilters}>Reeset Filters</button>

            </div>


        </div>
    )
}
