
declare module '@neumatter/http-error'

export default class HTTPError extends Error {
  statusCode: number
  name: string
  message: string

  constructor (...args: [number?, string?, object?])

  get status (): number

  get stack (): string

  toJSON (): {
    name: string,
    statusCode: number,
    message: string
  }
}
