interface Iprops {
  msg: string;
}

const ErrorMessage = ({ msg }: Iprops) => {
  return msg ? (
    <span className="block text-[#c2344d] font-semibold text-sm">{msg}</span>
  ) : null;
};

export default ErrorMessage;
