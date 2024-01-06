import {Collection} from "./models/Collection";
import {User, UserProps} from "./models/User";

const rootUrl = 'http://localhost:3000/users'

const collection = new Collection<User, UserProps>(rootUrl, (json:UserProps) => User.buildUser(json))

collection.on('change', () => {
  console.log(collection)
});

collection.fetch();