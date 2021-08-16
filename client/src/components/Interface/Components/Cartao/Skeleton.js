import React from 'react';
import { Hidden, Grid, Card, Typography, CardContent, CardActions, Box } from '@material-ui/core'; 
import Skeleton from '@material-ui/lab/Skeleton';


const CartaoSkeleton = () => {

    const cartao = (
    
        <Grid item xs={12} md={6} lg={4} >

            <Card elevation={20} style= {{position:'relative'}}>
                <Typography variant='h6'><Skeleton style={{margin: 'auto'}} width={180} animation="wave" variant='text'/></Typography>

                <Typography 
                            variant="caption"
                        >
                    <Skeleton style={{margin: 'auto'}} width={160} animation="wave" variant='text'/>
                </Typography>

                <Typography 
                            variant="caption"       
                        >
                    <Skeleton style={{margin: 'auto'}} width={160}  animation="wave" variant='text'/>
                </Typography>


                <CardContent style={{display: 'flex', flexDirection:'column'}}>

                    <Box my={1}>
                        <Typography style={{margin: '0 80px'}} align='center' variant='subtitle2' color='textSecondary'><Skeleton animation="wave" variant='text'/></Typography>
                        <Typography style={{margin: '0 80px'}} align='center' variant='subtitle2' color='textSecondary'><Skeleton animation="wave" variant='text'/></Typography>
                    </Box>

                    <Typography style={{margin: '0 200px'}} align='center' variant='subtitle1' color='textSecondary'> <Skeleton animation="wave" variant='text'/> </Typography>

                    </CardContent>
                    <CardActions style={{width:'100%', display: 'flex',}}> 

                        <Grid style={{margin: '10px 0'}} container justifyContent='center' spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Skeleton animation="wave" variant='rect' height={25}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Skeleton animation="wave" variant='rect' height={25}/>
                            </Grid>


                        </Grid>

                    </CardActions>
            </Card>
        </Grid>
    )

    return (
        <>
        {cartao}
        {cartao}
        {cartao}

    <Hidden mdDown>
        {cartao}
        {cartao}
        {cartao}
    </Hidden>

    <Hidden smDown>
        {cartao}
        {cartao}
        {cartao}
    </Hidden>
        </>
    )
}


export default CartaoSkeleton;