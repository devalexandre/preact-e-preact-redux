import {h, Component } from 'preact'
import { connect } from 'preact-redux';

import *  as actions   from '../../actions/contador'
import reduce  from '../../reducers/reducers'

@connect(reduce, actions)

export default class Contador extends Component{

    handlerAdd = () =>{
        
        let data = this.props.contador++;
        this.props.add(data)
    }
    render({contador}){
        return(
            <div>
            <label>{contador}</label>
            <button onClick={this.handlerAdd} >add </button>
            </div>
        )
    }
}