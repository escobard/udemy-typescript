import { User } from "../models/User";

export class UserForm {
  // can determine HTML specific types with TS, cool!
  /// Element type refers to any HTML that we want to render
  //// there are more specific HTML types to explore
  constructor(public parent: Element, public model: User) {
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  // sets up event handlers for when the button is clicked
  eventsMap(): { [key: string] : () => void } {
    // must contain correct HTML DOM events
    /// full list of HTML DOM events https://www.w3schools.com/jsref/dom_obj_event.asp
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    }
  }

  // remember to use arrow functions with children class that refer to another class!!
  /// otherwise this.model is undefined, because it comes from a constructor class
  onSetAgeClick = () :void  => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    // extracts values out of input
    const name = input.value;

    this.model.set({ name });
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
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

  render(): void {

    // empties out the parent element per render
    this.parent.innerHTML = '';

    // creates an HTML template with raw JS, this is what helps make React so powerful
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // binds elements to the HTML DOM
    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content);
  }
}