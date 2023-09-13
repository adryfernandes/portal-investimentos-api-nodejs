// POST credentials/signup
export interface SignupRequest {
  name: string;
  last_name: string;
  document: string;
  email: string;
  cellphone?: string;
  tellphone?: string;
}
