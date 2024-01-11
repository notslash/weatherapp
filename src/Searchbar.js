import "./Searchbar.css"

const Searchbar =()=>{
    return(
        <div>
            <form className="bar">
                <input id="search_bar" type="text" placeholder="Search"/>
                    <button id="button_search" type="submit">submit</button>
            </form>
        </div>
    )
}

export default Searchbar;