import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

import './MyCourses.css'
import useMyOrders from '../../../hooks/useMyOrders';

const MyOrders = () => {
    const { myOrders } = useMyOrders();
    return (
        <Box sx={{ width: '100%' }}>
            <h4 style={{ color: 'crimson' }}>Your Courses {myOrders?.length}</h4>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    myOrders?.map(myOrder => <Grid item xs={12}>
                        <Paper elevation={3}>
                            <div className="order-list">
                                <img className="order-image" src={myOrder?.img} alt="" />
                                <div className="description-area">
                                    <h5 className="fw-bold">{myOrder?.title}</h5>
                                    <h6 className="fw-bold text-danger">${myOrder?.price}</h6>
                                    {
                                        <small className="status">Status: {myOrder?.status}</small>
                                    }
                                </div>
                                <div className="manage-area">
                                    <span className="text-danger btn"><i class="fas fa-trash"></i></span>
                                </div>
                            </div>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default MyOrders;