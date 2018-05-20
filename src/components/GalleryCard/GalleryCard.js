import React, { Component } from 'react';
import ImageOrText from '../ImageOrText/ImageOrText';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';

const styles = {
    card: {
        width: '150px',
        float: 'left',
        padding: '10px',
        margin: '10px',
    },
};

class GalleryCard extends Component {
    
    render(props) {
        return (
            <MuiThemeProvider theme={this.props.myTheme}>
                <Card className={this.props.classes.card}>
                    <ImageOrText myTheme={this.props.myTheme} item={this.props.item}/>
                    <CardContent>
                        <p>
                            {this.props.item.likes} people like this!
                        </p>
                    </CardContent>
                    <CardActions>
                        <ThumbUp 
                            className={this.props.classes.icon} 
                            onClick={this.props.handleLike(this.props.item.id)}
                            color="secondary">
                        </ThumbUp>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(GalleryCard);
