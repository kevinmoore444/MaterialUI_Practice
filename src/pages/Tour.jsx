import React from 'react'
import {Typography, Container, Paper, BottomNavigation} from '@mui/material';
import Box from '@mui/material/Box';
import ImageCollage from "../components/ImageCollage"
import CustomizedAccordions from '../components/Accordian';
import BasicModal from '../components/Modal';

const Tour = () => 
    <Container sx={{width: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore The World in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" height={325}/>
            <ImageCollage/>
        </Box>
        <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores unde delectus voluptatem. Ducimus nostrum dolore reiciendis quia beatae amet, accusamus delectus pariatur natus, alias ad unde vero magni vitae voluptatibus? Fuga quas eaque quasi deleniti error sed officia magni?
        </Typography>
        </Box>

        <Box marginBottom={10}>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions/>
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal/>
            </BottomNavigation>
        </Paper>
    </Container>
export default Tour