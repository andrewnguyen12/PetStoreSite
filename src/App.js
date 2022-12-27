
import './App.css';
import {Fragment} from "react";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import {Container, Row, Col} from "react-bootstrap"
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Fragment>
        <Header/>
        <main className='py-3'>
            <Container>
                <HomeScreen/>
            </Container>
        </main>
        <Footer/>
    </Fragment>
  );
}

export default App;
