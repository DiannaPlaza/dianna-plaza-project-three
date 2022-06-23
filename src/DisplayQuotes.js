// Result Component to Dispaly Quotes

const DisplayQuotes = (props) => {

    return(
        <section>
            {
                props.quotes.length === 0 ? (
                    <h3>Everyone has one of those days. Feel free to take the time needed to read through some quotes! ✨ </h3>
                    ):(
                    <>
                        <ul className="resultsContainer">
                            {
                                props.quotes.map( (quote) => {
                                    return(
                                        <li 
                                            className="quotes" 
                                            key={quote._id}>
                                            "{quote.content}"
                                            - {quote.author}
                                        </li>
                                    )
                                })
                            }
                    
                        </ul>
                    </>             
                )                
            }
        </section>
    )
}

export default DisplayQuotes;