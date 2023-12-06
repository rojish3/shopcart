import Button from "../components/Button";
import { loginInputs } from "../data/loginInputs";
const Login = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col bg-red-400 p-4">
          {loginInputs.map((input) => (
            <div key={input.id} className="flex flex-col">
              <label>{input.label}</label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                className="outline-red-700 px-2 py-1"
              />
            </div>
          ))}
          <Button label={"Login"} />
        </div>
      </div>
    </>
  );
};

export default Login;
