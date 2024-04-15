import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import {GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { addUser } from "../../Service/api";


const Component=styled(Box)`
display:flex`;

const Container=styled(Box)`
padding:56px 0 56px 56px;
`;


const Qrcode=styled("img")({
  height:264,
  width:264,
  margin:"50px 0 0 50px"
});

const Title = styled(Typography)`
font-size: 24px;
color: #525252;
font-weight: 300;
font-family: inherit;
margin-bottom: 25px;
`;

const StyledList = styled(List)`
&>li{
  padding:  0;
  margin-top: 15px;
  fonst-size: 18px;
  line-height: 20px;
  color: #4a4a4a;
}
`;


const dialogstyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxwidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "0",
  overflow: "hidden",
  backgroundColor: "none",
};

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

const onLoginSuccess = async (response) => {
  const decode = jwtDecode(response.credential);
  setAccount(decode);
  await addUser(decode);
}

const onLoginError = (response) => {
  console.log("Login Failed",response);
}

  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      <Component>

        <Container>
          <Title >Connect Buddies is on your computer</Title>
          <StyledList>
            <ListItem>1. Open Connect Buddies on your phone</ListItem>
            <ListItem>2. Tap on Login and signup with your mail</ListItem>
            <ListItem>3. Signup with your account and enjoy</ListItem>
          </StyledList>
        </Container>

        <Box style={{position:"relative"}} >
          <Qrcode src={qrCodeImage} alt="Barcode" />
          <Box style={{position:"absolute",top:"44%",transform:"translatex(25%)"}}>
            <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginError}
/>
          </Box>
        </Box>

      </Component>
    </Dialog>
  );
};

export default LoginDialog;
