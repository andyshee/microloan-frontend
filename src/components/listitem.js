import React from 'react'
import {ListGroup} from 'react-bootstrap'
import Feeditem from './feeditem.js'

export default class Listitem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{width: "25%"}}>
                <ListGroup>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>
                    <ListGroup.Item><Feeditem/></ListGroup.Item>        
                </ListGroup>
            </div>
            
        )
    }
}
