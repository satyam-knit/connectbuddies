import {Box, styled, Typography, Divider} from "@mui/material";
import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)`
background: #f8f9fa;
padding: 30px;
text-align: center;
height: 100%;
`;

const Container = styled(Box)`
padding: 0 200px;
`;

const Image = styled("img")({

width: 400,
});

const Title = styled(Typography)`
font-size: 32px;
margin: 25px 0 10px 0;
font-family: inherit;
font-weight: 300;
color: #000000;
`

const Subtitle = styled(Typography)`
font-size: 14px;
font-weight: 400;
font-family: inherit;
color: #667781;

`;
const EmptyChat = () => {
    return(
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="Empty Chat" />
                <Title>Connect Buddies</Title>
                <Subtitle >Now Do chats with your emails only no need to share your phone numbers</Subtitle>
                <Subtitle >Use your Connect Buddies on your Computer</Subtitle>
                <Divider />
            </Container>
        </Component>
    )
}

export default EmptyChat;