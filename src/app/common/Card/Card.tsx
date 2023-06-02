interface CardProps {
  children: React.ReactNode;
  className: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  // Общий класс для возможной кастомной стилизации для отдельно взятого компонента
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
};
