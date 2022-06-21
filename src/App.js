// *** App Component ***
import './App.css';

// import the axios package;
import axios from 'axios';
// import the useEffect Hook
import {useEffect, useState} from 'react';
import Header from './Header.js';
import Form from './Form.js';
import DisplayQuotes from './DisplayQuotes.js';
import Footer from './Footer.js';


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
        console.log(apiData.data.results);
   
       setQuoteTag(apiData.data.results);
   
       } ).catch( () => {

        console.log("ERROR, Please select an option to display quotes")

       })
      
    }    

  }, [queryChoice] )

    const userSelection = function(event, tagValue) {

      event.preventDefault ();

      setQueryChoice(tagValue)

    }

  return (
    <div className='App'>
      <div className='wrapper'>
      <Header />
      <Form handleSubmit={userSelection}/>
      <DisplayQuotes quotes={quoteTag} />
      <Footer />
      </div>     
    </div>
  );
}

export default App;


