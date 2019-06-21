import React,{Component} from 'react';
import { BrowserRouter ,Router } from 'react-router-dom'
import Home from './Home';
import Artist from './Artist';
  
class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>

                <Router exact path="/" component={Home}/>
                <Router exact path="artist/:artistid" component={Artist}/>
                </div>

            </BrowserRouter>
        )
    }
}
export default Routing