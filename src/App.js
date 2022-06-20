import './App.css';

// import the axios package;
import axios from 'axios';
// import the useEffect Hook
import {useEffect, useState} from 'react';
import Header from './Header.js';
import Form from './Form.js';


function App() {
  console.log('App has re-rendered')
  // call the useState Hook to hold the array of quotes from the quoteable API
  // the API resturns an array of objects, therefore we'll intialize state as an empty array
  const [quoteTag, setQuoteTag] = useState([]);

  useEffect( () =>{
     // make the axios call within a useEffect

    axios({

     baseURL:'https://api.quotable.io/',
     url: 'search/quotes',
     method: "GET",
     params:  {
      fields: 'tags',
      // need to update the fields property based on the user's selctions
      query: 'inspirational'
     },

    }).then ( (apiData) =>{

      // traverse through the response object to get to the array of puppy pics
    console.log(apiData.data.results)

    // take the data that is returned from the API and store it within state
    setQuoteTag(apiData.data.results);

    })

  }, [] )
  // define a function which will be passed as props to Form
    // when this function is called -- by Form - it wil update a piece of state

    const userSelection = function(event) {

      // this function is called when the form is submitted, so it needs to tell the form NOT to refresh the page
      event.preventDefault ();

      console.log("chosen selection!")
    }

  return (
    <div className="App">      
      <Header />
      <Form handleSubmit={userSelection}/>
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