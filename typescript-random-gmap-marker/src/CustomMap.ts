import { User } from "./User";
import { Company } from "./Company";

// carries a reference to google maps, with limited access only
/// whole purpose is to ensure other engineers only leverage the functions the application is intended to work with
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addUserMarker(user: User): void {
    // create a new google maps marker
    new google.maps.Marker({
      // apply it to the google map created by the class
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }
}