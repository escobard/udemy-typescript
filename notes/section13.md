# section 13 - ts web framework

# class design
- split into two, model and view classes

## model classes
- handle data, used to represent users, blog posts, images, etc

## view classes
- handle html and events caused by the user (like clicks)

## for this project
- steps to maximize ts usage:
  1. build super class (in this case User) as a mega class with tons of methods
  2. refactor user to use composition
  3. refactor user to be re-usable class that can represent any piece of data, not just user