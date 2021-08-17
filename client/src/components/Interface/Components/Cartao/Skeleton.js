import React from 'react';
import { Hidden, Grid, Card, Typography, CardContent, Avatar, CardActions, Box } from '@material-ui/core'; 
import Skeleton from '@material-ui/lab/Skeleton';

import { useTheme } from '@material-ui/styles';


import { useStyles } from './Cartao.styles';

const CartaoSkeleton = () => {

    const classes = useStyles()
    const theme = useTheme()

    return (

    <Grid item xs={12} md={6} lg={4} >

        <Card variant={theme.palette.type === 'dark' ? 'outlined' : 'elevation'} elevation={20} style= {{position:'relative'}}>
            <Typography variant='h6'><Skeleton style={{margin: 'auto'}} width={'30%'} animation="wave" variant='text'/></Typography>

            <Typography variant='h2'> <Skeleton variant='circle' className={classes.editIconSkeleton}><Avatar /></Skeleton>  </Typography>
            <Typography variant='h2'> <Skeleton variant='circle' className={classes.deleteIconSkeleton}><Avatar /></Skeleton>  </Typography>

            <Typography 
                        variant="caption"
                    >
                <Skeleton style={{margin: 'auto'}} width={'35%'} animation="wave" variant='text'/>
            </Typography>

            <Typography 
                        variant="caption"       
                    >
                <Skeleton style={{margin: 'auto'}} width={'35%'} animation="wave" variant='text'/>
            </Typography>


            <CardContent style={{display: 'flex', flexDirection:'column'}}>

                <Box my={1}>
                    <Typography  align='center' variant='subtitle2' color='textSecondary'><Skeleton animation="wave" style={{margin: 'auto'}}  width={'70%'} variant='text'/></Typography>
                </Box>

                <Typography align='center' variant='subtitle1' color='textSecondary'> <Skeleton style={{margin: 'auto'}}  width={'30%'} animation="wave" variant='text'/> </Typography>

                </CardContent>
                <CardActions style={{width:'100%', display: 'flex'}}> 

                    <Grid container justifyContent='center' spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Skeleton animation="wave" variant='rect' height={32}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Skeleton animation="wave" variant='rect' height={32}/>
                        </Grid>


                    </Grid>

                </CardActions>
        </Card>
    </Grid>
)

}


const CartoesSkeleton = () => {

    return (
        <>
        <CartaoSkeleton/>
        <CartaoSkeleton/>
        <CartaoSkeleton/>

    <Hidden mdDown>
        <CartaoSkeleton/>
        <CartaoSkeleton/>
        <CartaoSkeleton/>
    </Hidden>

    <Hidden smDown>
        <CartaoSkeleton/>
        <CartaoSkeleton/>
        <CartaoSkeleton/>
    </Hidden>
        </>
    )
}


export default CartoesSkeleton;