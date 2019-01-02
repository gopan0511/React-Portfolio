import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (

                <div className='projects-grid'>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.android.com/static/2016/img/share/andy-lg.png) center / cover' }}></CardTitle>
                        <CardText>
                            Ghost Dictionary
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/GhostDictionary' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.android.com/static/2016/img/share/andy-lg.png) center / cover' }}></CardTitle>
                        <CardText>
                            Scarnes Dice
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/ScarnesDice' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.android.com/static/2016/img/share/andy-lg.png) center / cover' }}></CardTitle>
                        <CardText>
                            Anagrams
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/Anagrams' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/9f78fc09-faec-4068-82bd-09e7cc8bbf34/File/e19ea0216ae8395bd4b3389970928be9/java_logo.png) center / cover' }}></CardTitle>
                        <CardText>
                            Data Mining Implementations
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/DataMining-Lab' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/9f78fc09-faec-4068-82bd-09e7cc8bbf34/File/e19ea0216ae8395bd4b3389970928be9/java_logo.png) center / cover' }}></CardTitle>
                        <CardText>
                            Object Oriented Design and Analysis Patterns
                    </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/Object-Oriented-Analysis-and-Design-Pattern' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>

            );
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="project-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.digitalexpert.co/images/courses/data-structure.png) center / cover' }}></CardTitle>
                        <CardText>
                            Data Structures Implementations
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/Data-Structures-Lab' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className='projects-grid'>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pluralsight.imgix.net/paths/python-7be70baaac.png) center / cover' }}></CardTitle>
                        <CardText>
                            Python Programs Implementations
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/Python' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto', flexWrap: 'wrap' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pluralsight.imgix.net/paths/python-7be70baaac.png) center / cover' }}></CardTitle>
                        <CardText>
                            Sentiment Analysis using NLP
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/gopan0511/Sentiment-Analysis-NLP' target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Android</Tab>
                    <Tab>Java</Tab>
                    <Tab>Data Structures</Tab>
                    <Tab>Python</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        );
    }
}


export default Projects;