import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, styled, Typography } from '@mui/material';
import { BsWhatsapp } from 'react-icons/bs';

import ButtonCom from '../HOC/ButtonCom';

const ProductCard = styled(Card)(({ theme }) => ({
    maxWidth: 360,
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    background: 'linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)',
    transition: '0.3s ease-in-out',
    border: '1px solid #E0E0E0',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
    },
}));

function WashStripeProductCard() {
    return (
        <div className="container-xxl my-4">
            <div className='row justify-content-center justify-content-md-start'>
                {Data.map((i, index) => (
                    <div className='col-lg-3 col-md-4 col-sm-5 col-10 mb-4' key={index}>
                        <ProductCard>
                            <CardMedia
                                component="img"
                                height="220"
                                image={i.img}
                                alt="WashStripe Product"
                                style={{ objectFit: 'contain' }}
                            />
                            <CardContent sx={{ textAlign: 'center', padding: '16px' }}>
                                <Typography variant="h6" fontWeight="bold" color="#0077B6">
                                    {i.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                    {i.description}
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" color="#004E89" sx={{ mt: 1 }}>
                                    {i.price}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                <Box>
                                    <IconButton sx={{ color: '#0077B6' }} title="View Details">
                                        <img src={require("../../Assets/images/logopngCrop.png")} alt="" height={45} width={45} className='img-fluid' />
                                    </IconButton>

                                </Box>
                                {/* <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#0077B6',
                                        color: 'white',
                                        borderRadius: '20px',
                                        padding: '6px 16px',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: '#005A8D' }
                                    }}
                                >
                                    Get Quotes
                                </Button> */}
                                <div className='getquots'>
                                    <ButtonCom btn="Get Quotes" />
                                </div>
                                <IconButton sx={{ bgcolor: '#25D366', color: 'white', ml: 1, borderRadius: '12px' }}>
                                    <BsWhatsapp title='Inquiry Via Whatsapp' />
                                </IconButton>
                            </CardActions>
                        </ProductCard>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WashStripeProductCard;

const Data = [
    {
        img: require("../../Assets/images/about us_image_copy.jpg"),
        title: 'Ultra Clean Laundry Detergent',
        description: "Experience deep cleaning with eco-friendly, fabric-safe ingredients.",
        price: "₹499.00",
    },
    {
        img: require("../../Assets/images/extracaro.png"),
        title: 'Ultra Clean Laundry Detergent',
        description: "Experience deep cleaning with eco-friendly, fabric-safe ingredients.",
        price: "₹499.00",
    },
    {
        img: require("../../Assets/images/form_bg.jpg"),
        title: 'Ultra Clean Laundry Detergent',
        description: "Experience deep cleaning with eco-friendly, fabric-safe ingredients.",
        price: "₹499.00",
    },
    {
        img: require("../../Assets/images/logojpg.jpg"),
        title: 'Ultra Clean Laundry Detergent',
        description: "Experience deep cleaning with eco-friendly, fabric-safe ingredients.",
        price: "₹499.00",
    },
    {
        img: require("../../Assets/images/service_img.jpg"),
        title: 'Ultra Clean Laundry Detergent',
        description: "Experience deep cleaning with eco-friendly, fabric-safe ingredients.",
        price: "₹499.00",
    },
];
