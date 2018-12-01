import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

class DayBox extends Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false
    };
  };

  render() {
    return (
      <td>
        <div>
          <h2>
          <button onClick={() => alert("test")}>{this.props.text}</button>
          </h2>
        </div>
      </td>
    )
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    console.log("test")
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    var week1 = [];
    var week2 = [];
    var week3 = [];
    var week4 = [];
    var week5 = [];

    for (var i=1; i <= 7; i++) {
      week1.push(<DayBox text={i}/>);
    }
    for (var i=8; i <= 14; i++) {
      week2.push(<DayBox text={i}/>);
    }
    for (var i=15; i <= 21; i++) {
      week3.push(<DayBox text={i}/>);
    }
    for (var i=21; i <= 27; i++) {
      week4.push(<DayBox text={i}/>);
    }
    for (var i=27; i <= 33; i++) {
      week5.push(<DayBox text={i}/>);
    }
    
    return (
      <div class="centre">
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          
          contentLabel="Example Modal"
        >
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          </Modal>
      
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Orgalendar</h1>
        </header>


        
        
        

          <table border="1">
          <tbody>
            <tr>{week1}</tr>
            <tr>{week2}</tr>
            <tr>{week3}</tr>
            <tr>{week4}</tr>
            <tr>{week5}</tr>
          </tbody>
        </table>

        
      </div>
    );
  }
}

export default App;
