import axios, {AxiosResponse} from "axios";

export class Sync {
  // retrieves data from this.data by using propName key as argument
  get(propName: string): (number | string) {
    return this.data[propName]
  }
  set(update: UserProps): void {
    // adds new object to this.data
    /// copies new object properties over to original object
    Object.assign(this.data, update);
  }
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse) => {
      // updates existing user (if it exists) with new data
      this.set(response.data);
      console.log('fetch succeeded! response data:', response.data)
    })
  }
  save(): void {
    const id = this.get('id')
    if(id){
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      axios.post(`http://localhost:3000/users`, this.data)
    }
  }
}