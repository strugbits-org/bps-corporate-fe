import { createClient, OAuthStrategy } from '@wix/api-client';
import { submissions } from '@wix/forms';

const wixClientForm = createClient({
    modules: { submissions } ,
    auth: OAuthStrategy({ clientId: process.env.REACT_APP_WIX_CLIENT_ID_DEV })
  });

export default wixClientForm;