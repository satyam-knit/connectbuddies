import {Box} from "@mui/material";

import { useState } from "react";

import Header from "./Header";
import Search from "./Search";
import Conversation from "./Converstation";



const Menu = () => {

    const [text, setText] = useState('');
    return(
        <Box>
            <Header />
            <Search setText={setText} />
            <Conversation text = {text}/>

        </Box>
    )
}

export default Menu;