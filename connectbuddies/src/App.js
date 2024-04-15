import { GoogleOAuthProvider } from '@react-oauth/google';
// eslint-disable-next-line no-unused-expressions
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';


function App() {

  const clientId = '841772115038-4iunk0va1i5f6ekubufuk9dcb1afr5lq.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>

    </GoogleOAuthProvider>
  );
}

export default App;
