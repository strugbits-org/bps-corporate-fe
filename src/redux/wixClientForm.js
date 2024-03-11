import { createClient, OAuthStrategy } from '@wix/api-client';
import { submissions } from '@wix/forms';
// import { OAuthStrategy, createClient } from "@wix/sdk";

const wixClientForm = createClient({
    modules: { submissions } ,
    auth: OAuthStrategy({ clientId: '04038da0-732b-471d-babe-4e90ad785740' })
  });

export default wixClientForm;