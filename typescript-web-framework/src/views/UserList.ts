import { CollectionView } from './CollectionView';
import { User, UserProps } from "../models/User";
import { UserShow } from './UserShow'

export class UserList extends CollectionView<User, UserProps> {
  // since UserList is a child of CollectionView, it requires the abstract method renderItem
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}