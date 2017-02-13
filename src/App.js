import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './Containers/StudentList';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <StudentList />
                </div>
        );
    }
}

export default App;
