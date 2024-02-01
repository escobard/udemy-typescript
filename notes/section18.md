# TS with React
- command to create a typescript react app with cra:
  - `npx create-react-app app --template typescript`

## Conflicts between TS type files
- sometimes there is a clash between type definition files on two libraries that cause weird errors (redux & thunk for example)
- can be resolved by declaring a generic TS function instead of the type definition of the action creator