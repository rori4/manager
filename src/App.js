import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

console.ignoredYellowBox = ['Setting a timer'];

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCBsTc4_IfPAViVcIzV5XpY0b6-kzf05bw',
            authDomain: 'manager-ba156.firebaseapp.com',
            databaseURL: 'https://manager-ba156.firebaseio.com',
            projectId: 'manager-ba156',
            storageBucket: 'manager-ba156.appspot.com',
            messagingSenderId: '1000892621312'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}


export default App;
