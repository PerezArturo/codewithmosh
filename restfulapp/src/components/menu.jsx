import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Jokes from "./jokes";


class Menu extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Grid item md={12} style={{textAlign: 'center'}}>
                        <Typography variant={'h1'}>Menu</Typography>
                    </Grid>
                    <HashRouter>
                        <Grid container style={{textAlign: 'center'}}>
                            <Grid item xs={6} style={{marginBottom: 20}}>
                                <NavLink to='beerapi'>Home</NavLink>
                            </Grid>
                            <Grid item xs={6}>
                                <NavLink to="/">Home</NavLink>
                            </Grid>
                            <Grid item xs={6}>
                                <NavLink to="/">Home</NavLink>
                            </Grid>
                            <Grid item xs={6}>
                                <NavLink to="/">Home</NavLink>
                            </Grid>
                        </Grid>
                    </HashRouter>
                </Grid>
            </Container>
        )
    }
}

export default Menu;

