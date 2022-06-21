// Result Component to Dispaly Quotes

const DisplayQuotes = (props) => {

    return(
        <section>
            {
                props.quotes.length === 0 ? (
                    <p>Please selecet an option to view Quotes !</p>
                    ):(
                        <>
                        
                        <p>Here are some quotes:</p>
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