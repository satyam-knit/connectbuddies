import { useEffect } from "react";

import { Box, InputBase, styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

import { uploadFile } from "../../../Service/api";

const Container = styled(Box)`
  height: 50px;
  background: #fcf55f;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #000;
  }
`;

const Search = styled(Box)`
  background-color: #fdfeff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const Inputfield = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 16px;
`;

const Footer = ({ sendText, setValue, value, file , setFile, setImage}) => {

   useEffect(() => {

    const getImage =  async () => {

      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        setImage(response.data)
      }
    }
    getImage();

   },[file,setImage])   

   const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
   }

  return (
    <Container>
      <EmojiEmotionsOutlinedIcon />

      <label htmlFor="fileInput">
        <AttachFileOutlinedIcon />
      </label>

      <input 
      id="fileInput" 
      type="file" 
      style={{ display: "none" }} 
      onChange={(e)=>onFileChange(e)}
      />

      <Search>
        <Inputfield
          placeholder="Type a message"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => sendText(event)}
          value={value}
        />
      </Search>
      <MicOutlinedIcon />
    </Container>
  );
};

export default Footer;
