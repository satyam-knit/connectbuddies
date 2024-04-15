import { useState } from 'react';

import MoreVert from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, styled } from '@mui/material';

const MenuOption = styled(MenuItem)`
font-size: 16px;
padding: 15px 60px 5px 24px;
color: #4a4a4a;
`;


const HeaderMenu = ( {setOpenprofile}) => {

    const [open, SetOpen] = useState(null);

    const handleClose = () => {
        SetOpen(null);
    }

    const handelClick = (event) => {
        SetOpen(event.currentTarget)
    }

return(
    <>
    <MoreVert onClick={handelClick}/>
    
    <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
       anchorOrigin={
        {
            vertical: 'bottom',
            horizontal: 'center',
        
        }
       }
       transformOrigin={
        {
            vertical: 'top',
            horizontal: 'right',
        
        }
       }
      >
        <MenuOption onClick = {()=> {handleClose(); setOpenprofile(true);}}>Profile</MenuOption>
       
      </Menu>
    </>
)

}

export default HeaderMenu;