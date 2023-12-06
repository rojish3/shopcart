interface IButton {
  label: string;
}
const Button = ({ label }: IButton) => {
  return (
    <>
      <button className="outline-none px-8 py-2 bg-green-400">{label}</button>
    </>
  );
};

export default Button;
