import './App.css';

// import the axios package;
import axios from 'axios';
// import the useEffect Hook
import {useEffect, useState} from 'react';
import Header from './Header.js';
import Form from './Form.js';
import DisplayQuotes from './DisplayQuotes.js';


function App() {

  // call the useState Hook to hold the array of quotes from the quoteable API
  const [quoteTag, setQuoteTag] = useState([]);

  // another useState Hook to hold the user's selected query choice value
  const [ queryChoice, setQueryChoice] = useState('');

  useEffect( () =>{
    if (queryChoice){

      axios({

        baseURL:'https://api.quotable.io/',
        url: 'search/quotes',
        method: 'GET',
        params:  {
         fields: 'tags',
         query: queryChoice,
        },
   
       }).then ( (apiData) =>{
   
       setQuoteTag(apiData.data.results);
   
       } )
      
    }    

  }, [queryChoice] )

    const userSelection = function(event, tagValue) {

      event.preventDefault ();

      setQueryChoice(tagValue)

    }

  return (
    <div className='App'>      
      <Header />
      <Form handleSubmit={userSelection}/>
      <DisplayQuotes quotes={quoteTag} />
    </div>
  );
}

export default App;

// *** App Component ***
// Create state items to hold the quote data coming from the ZenQuotes API
// - random quotes


// Once the component has been loaded (mounted) call the local method (getQuotes) to get a list of random quotes to start

// A local method (getQutoes) to make the third-party API call to ZenQuotes
// - when successful, update the state (quote) with new data

// A local method (onClick) to handle the onClick event to update state when user submits button to get quotes.

// Render the application
// - header
// - use the imported Result component
// - footer

// *** Result Component ***
// Create a component to display data from the third-party API
// This component will get data (quotes) passed in as props
// Use .map() to render out 10 pieces of data