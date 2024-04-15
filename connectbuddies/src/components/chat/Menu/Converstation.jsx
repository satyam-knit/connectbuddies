import { useEffect, useState,useContext } from "react";
import { getUsers} from "../../../Service/api";
import { Box , styled, Divider} from "@mui/material";
import Conv from "./Convo";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
height : 81vh;
overflow: overlay `;

const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background-color: #ede9ef;
opacity: 0.6;
`

const Conversation = ({text}) => {

    const [users, setUsers] = useState([]);


    const {account} = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {

          let response = await getUsers();
          const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(filteredData);


        }
        fetchData();
      },[text]);
           
      
    return (<>
    <Component>
        {
            users.map(user => (
                user.sub !== account.sub && 
                <>
                <Conv user = {user}/>
                <StyledDivider/>
                </>
            ))
        }
       </Component>
    </>
       
    )
}

export default Conversation;