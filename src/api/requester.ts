export class Requester {
  constructor(
    public server: string,
    public token?: string,
  ) {}

  private getHeaders(tokenOverride?: string) {
    const headers = new Headers()
    const token = tokenOverride ?? this.token

    if (token !== undefined) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  }

  withToken(token: string) {
    this.token = token
  }

  do(req: Requestable, token?: string) {
    const auth = token ?? this.token

  }
}

export const requester = (server: string) => new Requester(server)

export interface Requestable {
  getEndpoint(): Endpoint
  getData(): string
}

export interface Endpoint {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'
  path: string
}
