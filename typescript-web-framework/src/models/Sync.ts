import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

// ts annotation expects T to conform to some form of constraint to understand the possible properties of T
/// can be fixed by appending an interface to T so TS annotation follows the given constraints
export class Sync<T extends HasId> {
  constructor(public rootUrl: string){}
  // returns a promise with the response from the API
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: T): void {
    const { id } = data

    if(id){
      axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      axios.post(this.rootUrl, data)
    }
  }
}