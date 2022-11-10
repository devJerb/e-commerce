import React, { useState, useEffect } from "react";
import {
    Paper,
    Container,
    Grid,
    Typography,
    Button,
    Box,
} from '@material-ui/core';
import Social from "./Social";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";

import useStyles from './styles';

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);

  return (
    <Paper className={styles.section} id="about">
      <img
        className={styles.heroImage}
        src="https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        style={{ position: "absolute" }}
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
        <Hidden xsDown>
          <Grid item sm={1}>
            <Social direction="column" />
          </Grid>
        </Hidden>
        <Grid item sm={8}>
            <Typography component="h1" variant="h4" className={styles.domain}>
              AIO
            </Typography>
            <Typography component="h1" variant="h1">
              Shack
            </Typography>
            <Typography variant="h6">
            Sell, Buy, Repeat; have it simple, have it fast.
            </Typography>
            <Box my={2}>
            <Button
                component={Link}
                to="/cart" 
                variant="contained"
                color="secondary"
            >
                Your Shopping Cart
            </Button>
            </Box>
        </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}