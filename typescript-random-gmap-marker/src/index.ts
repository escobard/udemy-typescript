/// <reference types="@types/google.maps" />
/// https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap"

const user =  new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company)