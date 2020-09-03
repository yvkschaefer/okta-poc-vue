const { CLIENT_ID, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: 'https://dev-414194.okta.com/',
    redirectUri: 'http://localhost:4000/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    testing: {
      disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  }
}
