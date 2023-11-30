import { Grid, Search } from 'semantic-ui-react'
import FilterButton from './FilterButton'

function SearchFilter({searchValue, setSearchValue, handleFilterChange}) {
    function handleSearch(e) {
        setSearchValue(e.target.value)
    }
    console.log(searchValue)
    return(
        <Grid>
            <Grid.Column width={8}>
                <Search
                    placeholder='Search...'
                    onSearchChange={handleSearch}
                    value={searchValue}
                    showNoResults ={false}
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <FilterButton handleFilterChange={handleFilterChange}/>
            </Grid.Column>
        </Grid>
    )
}

export default SearchFilter;