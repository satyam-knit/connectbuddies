import { Box, Typography, styled} from "@mui/material";

import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../Service/api";

import { formatDate } from "../../../utils/common-utils";

const Component = styled(Box)`
display:flex;
height : 45px;
padding: 13px 0;
cursor: pointer;
`

const Image = styled("img")({

width : 50,
height: 50,
borderRadius: "50%",
padding: "0 14px",
objectFit: "cover"
})

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Conv = ({user}) => {

    
    
    const { setPerson, account, newMessageFlag }  = useContext(AccountContext);


    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationMessage = async() => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationMessage();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newMessageFlag]);

  const getUser = async() => {
           setPerson(user);
           await setConversation({senderId:account.sub, receiverId: user.sub});
  }

  return (
    <Component onClick={() => getUser()}>
        <Box>
            <Image src={user.picture} alt="display picture" />
        </Box>
        <Box style={{width: '100%'}}>
            <Container>
                <Typography>{user.name}</Typography>
                { 
                    message?.text && 
                    <Timestamp>{formatDate(message?.timestamp)}</Timestamp>        
                }
            </Container>
            <Box>
                <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
            </Box>
        </Box>
    </Component>
)

}


export default Conv;