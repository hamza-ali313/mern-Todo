import { Container, Row, Col, Carousel, Nav, Tab, Sonnet, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import TodoApp from './pages/TodoApp';
import React from 'react';
class App extends React.Component {
   
    render() {
        
        
        return (
            
            <div>
                <TodoApp/>
            </div>
          
            
        );
    }
}



export default App;
