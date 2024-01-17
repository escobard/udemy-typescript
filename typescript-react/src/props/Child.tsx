// with TS, we make use of interfaces instead of proptypes
interface ChildProps {
  color: string;
  onClick: () => void;
  // this is a workaround to have non fc functions (syntax on line 10) render children
  children?: React.ReactNode;
}

// define prop arguments and their interface just like with regular TS
export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>;
};

// builds child as a functional react component
/// this help TS recognize that we are working with React, and pulls in react based types
//// it is recommended to use this style to maximize TS benefits, but usually the first style is all that is required and has simple syntax
//// this syntax style is required if you want to have the children render children of its own - eg <Child>{children}</Child>
export const ChildFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>;;
}