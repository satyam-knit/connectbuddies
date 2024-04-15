import { useContext, useState } from "react";
import {Box, styled} from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';



import { AccountContext } from "../../../context/AccountProvider";

import Profilemenu from "../../drawer/infoDrawer";
import HeaderMenu from "./Headermenu";


const Component = styled(Box)`
height:44px;
background:#FFBF00;
padding:8px 16px;
box-shadow:"none";
display:flex;
align-items:center;
`;

const Wrapper = styled(Box)`
margin-left:auto;
& > *{
    margin-left: 2px;
    padding: 8px;
    color: #000;
};
& :first-child{
    font-size: 22px;
    margin-right: 8px;
    margin-top: 2px;
}
`

const Image = styled("img")({
     height: 40,
     width: 40,
     borderRadius: "50%",
})

const Header =()=>
{

    const [openprofile,setOpenprofile] = useState(false);

    const {account} = useContext(AccountContext);

    const ToggleDrawer = () => {
        setOpenprofile(true);
    }

    return(
        <>
           <Component>
            <Image src={account.picture} alt="DP" onClick={() => ToggleDrawer()}/>

            <Wrapper>
                 <ChatIcon/>
                 <HeaderMenu setOpenprofile={setOpenprofile}/>
            </Wrapper>
           </Component>
           <Profilemenu open = {openprofile} setOpen={setOpenprofile}/>
           
        </>
    )
}

export default Header;