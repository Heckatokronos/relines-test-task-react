import { Card } from "../Card/Card";

interface ItemProps {
  children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({ children }) => {
  return <Card className="item">{children}</Card>;
};
