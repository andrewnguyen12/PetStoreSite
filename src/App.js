
import './App.css';
import {Fragment} from "react";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import {Container, Row, Col} from "react-bootstrap"

function App() {
  return (
    <Fragment>
        <Header/>
        <main>
            <Container>
                <h1 className='text-center py-3'>Welcome to ProShop</h1>
            </Container>
        </main>
        <Footer/>
    </Fragment>
  );
}

export default App;
