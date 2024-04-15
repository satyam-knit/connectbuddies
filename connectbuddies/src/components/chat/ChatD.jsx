import { Dialog, Box, styled } from "@mui/material";

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";



import Menu from "./Menu/Menu";
import EmptyChat from "./chats/EmptyChat";
import ChatBox from "./chats/chatBox"


const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 440px;

`;
const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);

`;


const dialogstyles = {
   height: "96%",
   width: "100%",
   margin: "20px",
   maxwidth:"1920px",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    borderradius: "0",

  };

const ChatD = () => {

  const {person} = useContext(AccountContext);

    return (

        <Dialog
        open={true}
        PaperProps={{ sx: dialogstyles }}
        hideBackdrop={true}
        maxWidth={false}>


            <Component>

                <LeftComponent>
                    <Menu />
                </LeftComponent>


                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </RightComponent>

            </Component>


        </Dialog>
      
        
    )

}

export default ChatD;