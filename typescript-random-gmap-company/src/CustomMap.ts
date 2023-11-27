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
}