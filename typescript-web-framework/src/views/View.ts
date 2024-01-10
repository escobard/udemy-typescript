import { HasId, Model } from "../models/Model";

// syntax below passes two generics into View class,
/// second generic is passed as an argument to first generic, making the first generic require the properties of the second generic loaded into it's class
/// T (first argument) must have the properties of Model<K>, K (second argument) to work
//// K (second argument) must contain an ID as specified by the Model class - complete soup of code
export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {}

  // can determine HTML specific types with TS, cool!
  /// Element type refers to any HTML that we want to render
  //// there are more specific HTML types to explore
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  // tells this class that it will require any child class to have these methods attached to it
  abstract template(): string;

  // returns a map of each HTML region to render on the screen
  regionsMap(): { [key: string]: string } {
    return {}
  }

  // tells this class that an eventsMap function might be implemented by a child class
  eventsMap(): { [key: string]: () => void } {
    return {}
  };

  bindModel(): void {
    // with a generic, a constraint is needed to ensure whatever generic is used at contains this.on()
    this.model.on('change', () => {
      this.render()
    })
  }

  bindEvents(fragment: DocumentFragment): void{
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap){
      const [eventName, selector] = eventKey.split(':');

      // finds the event that matches fragment argument
      /// attaches event listener to the appropriate elements
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for( let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector)
      if (element){
        this.regions[key] =  element;
      }

    }
  }

  render(): void {

    // empties out the parent element per render
    this.parent.innerHTML = '';

    // creates an HTML template with raw JS, this is what helps make React so powerful
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // binds elements to the HTML DOM
    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    this.parent.append(templateElement.content);
  }
}