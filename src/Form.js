// Form component 
    // tracking two events within this component
        // a change event on the select element & form submission
import { useState } from 'react';


const Form = ( props ) => {
    const [userSelectedValue, setUserSelectedValue] = useState('')

    const handleChange = (event) => {

        setUserSelectedValue(event.target.value);
    }

    return (
        <div className='wrapper'>
        <form 
            action=''
            onSubmit={  (event) => {
                props.handleSubmit(event, userSelectedValue) 
            } }
            >
            <label htmlFor='quoteOptions'></label>
            <select 
            name=''
            id='quoteOptions'
            onChange={ handleChange }
            value={ userSelectedValue }
            >
                <option value=''  disabled>Select an option</option>
                <option value='inspirational'>Inspirational</option>
                <option value='wisdom'>Wisdom</option>
                <option value='life'>Life</option>
                <option value='happiness'>Happiness</option>
                <option value='love'>Love</option>
                <option value='future'>Future</option>
                <option value='famous-quotes'>Famous-Quotes</option>
                <option value='success'>Success</option>
                <option value='friendship'>Friendship</option>
                <option value='faith'>Faith</option>
            </select>
            <button> Show me some quotes!</button>
        </form>
        </div>
    )
}

export default Form;