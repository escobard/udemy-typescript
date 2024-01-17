// with TS, we make use of interfaces instead of proptypes
interface ChildProps {
  color: string;
}

// define prop arguments and their interface just like with regular TS
export const Child = ({ color }: ChildProps) => {
  return <div>Hi there</div>;
};