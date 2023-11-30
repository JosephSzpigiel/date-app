import { Grid, Search } from 'semantic-ui-react'

function SearchFilter({searchValue, setSearchValue}) {
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
                />
            </Grid.Column>
        </Grid>
    )
}

export default SearchFilter;