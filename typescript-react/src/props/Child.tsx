// with TS, we make use of interfaces instead of proptypes
interface ChildProps {
  color: string;
}

// define prop arguments and their interface just like with regular TS
export const Child = ({ color }: ChildProps) => {
  return <div>Hi there</div>;
};

// builds child as a functional react component
/// this help TS recognize that we are working with React, and pulls in react based types
//// it is recommended to use this style to maximize TS benefits, but usually the first style is all that is required and has simple syntax
export const ChildFC: React.FC<ChildProps> = ({ color }) => {
  return <div>Hi there</div>;
}