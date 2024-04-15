import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { useContext } from "react";
import LoginDialog from "./account/Logindialog";
import { AccountContext } from "../context/AccountProvider";
import ChatD from "./chat/ChatD";

const Component = styled(Box)`
  height: 100vh;
  background-color: #ffff00;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #FFEE75;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 222px;
  background-color: #253529;
  box-shadow: none;
`;

const Messenger = () => {


  const { account } = useContext(AccountContext);
  return (
    <Component>
      {
        account ? <>
        <Header>
        <Toolbar></Toolbar>
      </Header>
      <ChatD />
      </>
        :
        <>
        <LoginHeader>
        <Toolbar></Toolbar>
      </LoginHeader>
      <LoginDialog />;
      </>
      }
      </Component>
      
  );
};

export default Messenger;
