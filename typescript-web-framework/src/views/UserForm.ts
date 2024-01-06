export class UserForm {
  // can determine HTML specific types with TS, cool!
  /// Element type refers to any HTML that we want to render
  //// there are more specific HTML types to explore
  parent: Element

  template(): string{
    return `
      <div>
      
      </div>
    `
  }
}