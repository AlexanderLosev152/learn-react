import style from "./h1.module.scss";
const H1 = ({ children, className, ...props }) => {
  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  );
};

export default H1;
