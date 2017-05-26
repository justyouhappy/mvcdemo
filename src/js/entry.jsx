// import {fetchdata} from './fetch';
// fetchdata(' http://localhost:8080/src/data.json').then((e) =>{
//     console.log(e);
// });
import React from 'react';
import createstore from './redux/store/store.js';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { setinpValue } from './redux/action/inputAction';
const store = createstore();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.setvalue = this.setvalue.bind(this);
    }
    setvalue(e) {
        let value = e.target.value;
        this.props.dispatch(setinpValue(value));
    }
    render() {
        return (
            <div>
                <input value={this.props.inpValue} onChange={this.setvalue}></input>
            </div>
        );
    }
}
App = connect((state) => {
    return state.inputReducer;
})(App);
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, app);