/// <reference types="@types/google.maps" />
/// https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

import { User } from "./User"
import { Company } from "./Company"

const user = new User();
const company = new Company();

console.log(user)
console.log(company)