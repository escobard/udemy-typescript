export class UserForm {
  // can determine HTML specific types with TS, cool!
  /// Element type refers to any HTML that we want to render
  //// there are more specific HTML types to explore
  constructor(public parent: Element) {}

  // sets up event handlers for when the button is clicked
  eventsMap(): { [key: string] : () => void } {
    // must contain correct HTML DOM events
    /// full list of HTML DOM events https://www.w3schools.com/jsref/dom_obj_event.asp
    return {
      'click:button': this.onButtonClick
    }
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  template(): string{
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click me</button>
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
    // creates an HTML template with raw JS, this is what helps make React so powerful
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // binds elements to the HTML DOM
    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content);
  }
}