import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import './App.css';

import { Provider } from 'react-redux';  //makes the store available to the nested react components wrapped in connect()
//connect function connects te react component to the redx store
import store from './store';
//default store imported 

class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <div className="App" > 
          <AppNavbar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
        </div>
      </Provider>
    );
  }
}



export default App;
