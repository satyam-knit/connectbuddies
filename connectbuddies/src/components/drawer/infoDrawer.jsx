
import {Drawer,Box, Typography, styled} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Profile from './Profile';
const drawerstyle = {
    left: 33,
    top:17,
    height:"95%",
    width:"32%",
    boxShadow: "none",

}

const Header = styled(Box)`

background: #F6BE00;
height: 107px;
color: #000000;
display: flex;
& > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 700;
}

`;


const Component = styled(Box)`
background: #ededed;
height:"85%";

`;

const Profilemenu = ({open , setOpen}) => {


    const handelclose = () => {
        setOpen(false);
    
    }

    return (
       <Drawer
       open={open}
       onAbort={handelclose}
       PaperProps={{sx: drawerstyle}}
       style={{zIndex: 1500}}
       >




        <Header>
          
          <ArrowBackIcon onClick={ () => setOpen(false) }/>
          <Typography >Profile</Typography>


        </Header>




        <Component>

            <Profile/>
        </Component>



       </Drawer>
    );
}

export default Profilemenu;