import { Credentials } from "./credentials"

export interface Person {
    _id: number,
    nom: string,
    prenom: string,
    dateNaissance: string,
    e_mail: string,
    credentials: Credentials,
    ecole: string,
    role: string
  }