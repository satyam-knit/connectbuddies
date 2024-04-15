
import {Box, InputBase, styled} from '@mui/material';
import  EmojiEmotionsOutlinedIcon  from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

    

const Container = styled(Box)`
height : 50px;
background : #FCF55F;
display : flex; 
width : 100%;
align-items : center;
padding : 0 15px;
& > *{
    margin : 5px;
    color : #000;
}
`;

const Search = styled(Box)`
background-color : #FDFEFF;
border-radius : 18px; 
width : calc(94% - 100px);

`;

const Inputfield = styled(InputBase)`
width : 100%;
padding : 20px;
height : 20px;
padding-left : 25px;
font-size : 16px;
`


const Footer =({sendText , setValue , value})=>
{


   

    
    return (
        <Container>
            <EmojiEmotionsOutlinedIcon/>
            <AttachFileOutlinedIcon/>
            <Search>
                <Inputfield 
                placeholder="Type a message"
                onChange={(event)=>setValue(event.target.value)}
                onKeyDown={(event)=> sendText(event)}
                value={value}
                />
            </Search>
            <MicOutlinedIcon/>
        </Container>
    )

}

export default Footer;