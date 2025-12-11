
export class TokenService {
  constructor() {
    this.tokenUrl = 'https://sso-stage.mprj.mp.br/realms/MPRJ-DEV/protocol/openid-connect/token';
    this.clientId = 'integracao-comunicacao-ouvidoria';
    this.clientSecret = 'fM5rFWhr6filyB9BZBUJO0HkeQR4hS1H';
    this.cookie = 'dtCookiepyp5obsn=v_4_srv_4_sn_FF8C2F5FCDF7766593E6BED1FDEF5116_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_rcs-3Acss_0';
  }

  // Monta body x-www-form-urlencoded
  _form(data) {
    return Object.entries(data)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
  }

  getToken() {
    const body = this._form({
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
    });

    return cy.request({
      method: 'POST',
      url: this.tokenUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: this.cookie, // opcional, conforme seu curl
      },
      body,
      log: false,
    }).then((resp) => {
      if (resp.status !== 200 || !resp.body?.access_token) {
        throw new Error(`Falha ao obter token: ${resp.status} ${JSON.stringify(resp.body)}`);
      }
      return resp.body.access_token;
    });
  }
}
