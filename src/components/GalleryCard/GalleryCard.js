import React, { Component } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';

const styles = {
    card: {
        minWidth: '150px',
        float: 'left',
        padding: '10px',
        margin: '10px',
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
};

class GalleryCard extends Component {
    render(props) {
        return (
            <MuiThemeProvider theme={this.props.myTheme}>
                <Card className={this.props.classes.card}>
                    {/* <img src={this.props.item.path} alt={this.props.item.description} /> */}
                    <CardMedia className={this.props.classes.media} image={this.props.item.path} title={this.props.item.description} />
                    <CardContent>
                        <p>
                            {this.props.item.likes} people like this!
                        </p>
                    </CardContent>
                    <CardActions>
                        <ThumbUp className={this.props.classes.icon}>
                        </ThumbUp>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

GalleryCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryCard);
