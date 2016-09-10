
export interface Customer {
  code: string,
  firstName: string,
  lastName: string,
  email: string,
  telephone: string
}

export interface HTTPResult {
  success: boolean,
  data: any[],
  error?: string[]
}