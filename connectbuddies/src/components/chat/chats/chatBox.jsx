import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from  '../../../Service/api';
import ChatHeader from './chatHeader';
import Message from './Message';

const ChatBox = () => {
  const { person, account} = useContext(AccountContext);
  const [conversation, setConversation] = useState({}); // Initialize conversation state

  useEffect(() => {
    const getConversationDetails = async () => {
      try {
        const data = await getConversation({ senderId: account.sub, receiverId: person.sub });
        setConversation(data);
      } catch (error) {
        console.error('Error fetching conversation:', error);
      }
    };
    getConversationDetails();
  }, [person.sub, account.sub]);

  return (
    <Box>
      <ChatHeader person={person} />
      <Message person={person} conversation={conversation} /> {/* Pass conversation as prop */}
    </Box>
  );
};

export default ChatBox;
