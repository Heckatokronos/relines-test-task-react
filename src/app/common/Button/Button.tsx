import "./Button.scss";

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
