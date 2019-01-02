import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return(
        <div className='contact-body'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                <h2>Gopan Samantaray</h2>
                <img src={require("../images/profile-avatar.jpg")} 
                alt="avatar"
                style ={{height: "250px"}}
                />
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Greetings. I am Gopan. I am a developer currently working at Wells Fargo. I am also a solo musician. I play multiple instrumnets like guitar, keyboards, drums. I also work on producing my own music and also collaborate with anyone who is interested. Do contact me if you wish to collaborate</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />

                    <div className="contact-list">
                    <List>
                    <ListItem>
                        <ListItemContent style={{fontSize : '25px', fontFamily: 'Oxygen'}}>
                        <i className='fa fa-phone-square' aria-hidden='true' />
                        (+91)8105204698
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize : '25px', fontFamily: 'Oxygen'}}>
                        <i className='fa fa-envelope' aria-hidden='true' />
                        gsamantaray.1102@gmail.com
                        </ListItemContent>
                    </ListItem>
                    </List>
                    </div>

                </Cell>
            </Grid>
        </div>
        );
    }
}


export default Contact;