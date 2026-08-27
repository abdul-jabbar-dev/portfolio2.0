export type RLogin = { login: { token: string, user: User } }
export type User = { email: string, id: string, metadata: null, type: string }