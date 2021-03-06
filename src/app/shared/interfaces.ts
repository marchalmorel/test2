export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FireBaseAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Article {
  source: object
  title: string
  content: string
}
