// Instructions to every other class on how they can be an argument to addMarker function
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

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

  addMarker(mappable: Mappable): void {
    // create a new google maps marker
    const marker = new google.maps.Marker({
      // apply it to the google map created by the class
      map: this.googleMap,
      position: {
        // ts validates that both User and Company classes have access to class.location
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    // event listener for when the marker gets clicked
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!'
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
/*
  // TS goes through both allowed types and checks that the properties in both types are allowed to call class.location
  /// not an ideal approach, since it required User | Company class types can change
  /// very tight coupling with addMarker and allowed argument classes, this is where ts interfaces can improve re-usability
  addMarker(mappable: User | Company): void {
    // create a new google maps marker
    new google.maps.Marker({
      // apply it to the google map created by the class
      map: this.googleMap,
      position: {
        // ts validates that both User and Company classes have access to class.location
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }*/

/*  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }*/
}