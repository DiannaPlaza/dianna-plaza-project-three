// Result Component to Dispaly Quotes

const DisplayQuotes = (props) => {
    console.log(props.quotes.length)
    return(
        <section>
            <h3>Here are some quotes:</h3>
            {
                props.quotes.length === 0 ? (
                    <h4>Sorry no quotes!</h4>
                ):( 
                    <ul className="resultsContainer">
                        {
                            props.quotes.map( (quote) => {
                                return(
                                <li 
                                className="quotes" 
                                key={quote._id}>
                                    {quote.content}

                                </li>

                                )


                            })
                        }
                    </ul>
                    

                )
                    
                
            }
        </section>
    )

}

export default DisplayQuotes;