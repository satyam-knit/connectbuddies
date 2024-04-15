import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../Service/api";
import Footer from "./Footer";
import Messages from "./msg";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Message = ({ person, conversation }) => {
  const [value, setValue] = useState("");

  const [messages, setMessages] = useState([]);

  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  const sendText = async (event) => {
    const code = event.keyCode || event.which;

    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };

      console.log(message);

      await newMessage(message);
      setValue(" ");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>{messages && messages.map((message) => <Messages message={message} />)}</Component>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Wrapper>
  );
};

export default Message;
