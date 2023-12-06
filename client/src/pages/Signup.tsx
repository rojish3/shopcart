import { signupInputs } from "../data/signupInputs";

const Signup = () => {
  return (
    <>
      <div className="h-screen flex flex-col gap-4 justify-center items-center bg-red-300">
        {signupInputs.map((input) => (
          <div key={input.id} className="flex flex-col">
            <label>{input.label}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              className="outline-red-700 px-2 py-2"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Signup;
