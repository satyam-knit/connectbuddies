import { useContext } from "react";
import {Box, styled, Typography} from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";


const Imagecontainer = styled(Box)`
    
    display: flex;
    justify-content: center;
    
`;

const BoxWrapper = styled(Box)`
    background: #ffffff;
    padding: 12px 30px 2px,
    box-shadow: 0 1px 3px rgb(0 0 0 0.08),

`;

const YourName = styled(Typography)({
    fontSize: 13,
    color: "#EF9B0F",
    fontWeight: 200,
    padding: "5px 15px",
})

const Name = styled(Typography)({
   margin: "14px 0",
   color: "#000000",
   padding: "5px 15px",
})

const Description = styled(Typography)({
    color: "#9b9b9b",
    fontSize: 12,
    fontWeight: 200,
    textAlign: "left",
    padding: "10px 15px",

})


const Image = styled("img")({
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "25px 0",
})


const About = styled(Typography)({  
    fontSize: 13,
    color: "#EF9B0F",
    fontWeight: 200,
    padding: "5px 15px",

})
const AboutDescription = styled(Typography)({  
    margin: "14px 0",
    color: "#000000",
    padding: "5px 15px",

})
const Profile = () => {
   
    const {account} = useContext(AccountContext);
  
    return (
        <>
        
             <Imagecontainer>
                <Image src={account.picture} alt="DP" />
             </Imagecontainer>


             <BoxWrapper>
                <YourName>Your Name</YourName>
                <Name >{account.name}</Name>
             </BoxWrapper>


             <Box>
                <Description>This is the UserName Provided By Google It is not to be changed until you change it from your account .
                You are Currently using Connect Buddies a Real time Chat Application 
                </Description>
             </Box>


             <Box>
             
              <About>About</About>
              <AboutDescription> अप्राप्यं नाम नेहास्ति धीरस्य व्यवसायिनः: Nothing is out of reach for someone with courage and perseverance. </AboutDescription>

             </Box>

        </>
    )
}

export default Profile;