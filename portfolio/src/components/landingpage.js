import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width : '100%' , margin : "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                        src = {require('../images/profile-pic.jpg')}
                        alt='avatar'
                        className='avatar-img'
                    />

                    <div className="banner-text">
                        <h1>Developer | Musician | Traveller</h1>

                        <hr />
                        <p>Web Developement | Android Developement | Guitar | Keyboards | Drums |Music Production</p>

                        <div className="social-links">

                            {/*LinkedIn*/}
                            <a href="https://www.linkedin.com/in/gopan-samantaray-a11b19ab/?trk=public-profile-join-page" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a> 

                            {/*Github*/}
                            <a href="https://github.com/gopan0511" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a> 

                            {/*SoundCloud*/}
                            <a href="https://soundcloud.com/gopan-samantaray" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-soundcloud" aria-hidden="true" />
                            </a>

                            {/*Facebook*/}
                            <a href="https://www.facebook.com/gopan.samantaray" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>

                            {/*Instagram*/}
                            <a href="https://www.instagram.com/the_eidolons_dream/?hl=en" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}


export default Landing;