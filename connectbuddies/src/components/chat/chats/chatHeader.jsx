import {Box, Typography, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
    



const Header = styled(Box)`
height : 44px;
background : #FFBF00;
padding : 8px 16px;
display : flex;
align-items : center;  
`


const Image = styled('img')({

    height : 40,
    width : 40,
    objectFit : 'cover',
    borderRadius : '50%',

});

const Name = styled(Typography)`
margin-left : 12px !important;
`
const Active = styled(Typography)`
margin-left : 12px !important;
font-size : 12px ;
color:rgb(0 , 0 ,0 ,0.6)
`

const Rightcontainer = styled(Box)`
margin-left : auto;

& > svg {
    padding : 8px;
    fons-size : 24px;
    color : #000;

}
`



const ChatHeader = ({person}) => {
 
    const {activeUsers} = useContext(AccountContext);

return (
    <Header>
        <Image src={person.picture} alt="DP user" />
        <Box>
            <Name>{person.name}</Name>
            <Active>{activeUsers?.find(user => user.sub === person.sub)? "online" : "offline"}</Active>
        </Box>

        <Rightcontainer>
          <SearchIcon/>
          <MoreVertIcon/>
        </Rightcontainer>
    </Header>
)
}

export default ChatHeader;