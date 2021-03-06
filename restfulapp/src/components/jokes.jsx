import React from "react";
import './jokes.css'
import {CardContent, Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const Jokes = ({contacts}) => {
    return (
        <Container>
            <h1 className='title'>Beer List</h1>
            <Grid>
                <Grid item md={12}>
                    <Paper elevation={3}>
                        {contacts.map((contact) => (
                            <Card key={contact.id}>
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography variant='h4' gutterBottom>{contact.name}
                                                <span> {contact.volume.value} {contact.volume.unit}</span></Typography>
                                            <Typography variant='h6' gutterBottom>{contact.tagline}</Typography>
                                            <Typography variant='body1'>{contact.description}</Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{marginBottom:20}}>
                                            <img
                                                style={{
                                                    height: 250,
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    display: "block"
                                                }}
                                                src={contact.image_url}
                                            />
                                        </Grid>
                                        <Grid item md={12}>
                                            <TableContainer component={Paper} style={{marginBottom:20}}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={{
                                                                backgroundColor: '#000',
                                                                color: 'white'
                                                            }}>abv</TableCell>
                                                            <TableCell style={{
                                                                backgroundColor: '#000',
                                                                color: 'white'
                                                            }}>ibu</TableCell>
                                                            <TableCell
                                                                style={{backgroundColor: '#000', color: 'white'}}>target
                                                                fg</TableCell>
                                                            <TableCell
                                                                style={{backgroundColor: '#000', color: 'white'}}>target
                                                                og</TableCell>
                                                            <TableCell style={{
                                                                backgroundColor: '#000',
                                                                color: 'white'
                                                            }}>ebc</TableCell>
                                                            <TableCell style={{
                                                                backgroundColor: '#000',
                                                                color: 'white'
                                                            }}>srm</TableCell>
                                                            <TableCell style={{
                                                                backgroundColor: '#000',
                                                                color: 'white'
                                                            }}>ph</TableCell>
                                                            <TableCell style={{
                                                                backgroundColor: '#000',
                                                                color: 'white'
                                                            }}>attenuation</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>
                                                                {contact.abv}
                                                            </TableCell>
                                                            <TableCell>
                                                                {contact.ibu}
                                                            </TableCell>
                                                            <TableCell>
                                                                {contact.target_fg}
                                                            </TableCell>
                                                            <TableCell>
                                                                {contact.target_og}
                                                            </TableCell>
                                                            <TableCell>
                                                                {contact.ebc}
                                                            </TableCell>
                                                            <TableCell>
                                                                {contact.srm}
                                                            </TableCell>
                                                            <TableCell>
                                                                {contact.ph}
                                                            </TableCell>
                                                            <TableCell>
                                                                {contact.attenuation_level}
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                            <Typography variant='h6' gutterBottom>Food pairing</Typography>
                                            <Typography variant='body1' gutterBottom>{contact.food_pairing}</Typography>
                                            <Typography variant='h6' gutterBottom>Brewers tips</Typography>
                                            <Typography variant='body1' gutterBottom>{contact.brewers_tips}</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Jokes