import { useState } from 'react';


const Form = ( props ) => {
    const [userSelectedValue, setUserSelectedValue] = useState('placeholder')

    console.log(props);
    // we're tracking Two events within this component
    // a change event on the select element
    // the form submission

    const handleChange = (event) => {
        // log out the value of the user's selected option
        console.log(event.target.value);

        setUserSelectedValue(event.target.value);
    }

    return (
        <form 
            action=""
            onSubmit={  (event) => {
                props.handleSubmit(event, userSelectedValue) 
            } }
            >
            <label htmlFor="quoteOptions"></label>
            <select 
            name="" 
            id="quoteOptions"
            // when a new option is selected "AKA" a change is detected withing the select -- fire a handleChange function
            onChange={ handleChange }
            // in order to convert this element into a "controlled component", it's value needs to be dictated by rreact
            value={ userSelectedValue }
            >
                <option value="placeholder disabled">Select an option</option>
                <option value="inspirational">Inspirational</option>
                <option value="wisdom">Wisdom</option>
                <option value="life">Life</option>
                <option value="happiness">Happiness</option>
                <option value="love">Love</option>
                <option value="future">Future</option>
                <option value="famous-quotes">Famous-Quotes</option>
                <option value="success">Sucess</option>
            </select>
            <button> Show me some quotes!</button>
        </form>
    )
}

export default Form;