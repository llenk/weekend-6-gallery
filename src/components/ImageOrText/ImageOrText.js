import React, { Component } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    media: {
        height: 0,
        paddingTop: '100%',
    },
    textBox: {
        top: '0px',
        maxWidth: '150px',
        minHeight: '150px',
        paddingTop: '0px',
        paddingBottom: '0px',
        alignText: 'center',
    },
};


class ImageOrText extends Component {
    constructor() {
        super();
        this.state = {
            image: true,
        };
    }

    handleClick = () => {
        this.setState({
            image: !this.state.image,
        });
    };

    render(props) {
        if (this.state.image) {
            return (
                <MuiThemeProvider theme={this.props.myTheme}>
                    <CardMedia className={this.props.classes.media} image={this.props.item.path} title={this.props.item.description} onClick={this.handleClick}/>
                </MuiThemeProvider>
            );
        }
        else {
            return (
                <MuiThemeProvider theme={this.props.myTheme}>
                    <CardContent className={this.props.classes.textBox} onClick={this.handleClick}>{this.props.item.description}</CardContent>
                </MuiThemeProvider>
            )
        }
    }
}

export default withStyles(styles)(ImageOrText);
