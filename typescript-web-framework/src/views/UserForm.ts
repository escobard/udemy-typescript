import { User, UserProps } from "../models/User";
import { View } from "./View";

// refactoring userform using composition would create a bilateral relationship (meaning both classes are dependent on each other) between two classes, making composition not ideal
// inheritance creates a linear relationship (parent / child) which is much simpler and cleaner to understand, inheritance is ideal
/// remember, try to go for what is simpler to understand / work with for developers!
export class UserForm extends View<User, UserProps> {

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

    // name variable should be protected with a traditional type guard to avoid strict null checks
    /// this means that no variable is allowed to be null on any conditional case
    if (input) {
      const name = input.value;

      this.model.set({ name })
    }
  }

  template(): string {
    return `
      <div>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }
}