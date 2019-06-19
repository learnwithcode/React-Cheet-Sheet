import React from 'react';
import ReactDOM from 'react-dom';

//Classed Based Component

// class App extends React.Component {
//     render() {
//         return <h1>Hello World</h1>
//     }
// };

//Function Based Component
const getLabelText = () => {
    return 'Enter Name: '
}

const App = () => {
    const buttonText = 'Click On Me'
    const getSecondButton = {text: 'Click Again'}
    return <div>
        <label className="label" htmlFor="name">{getLabelText()}</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
    
        <button style={{backgroundColor:'blue', color:'white'}}>{getSecondButton.text}</button>
    </div>
};

ReactDOM.render(<App/>, document.querySelector('#root'));