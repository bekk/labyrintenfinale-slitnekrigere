import { useNavigate } from "react-router";

interface ButtonProps {
  text: string;
  path: string;
  className?: string;
}

function routeTo(name: string, goTo: (a: string) => void) {
  goTo(name);
}
 

// example style for x in corner: "absolute top-5 left-5 text-gray-700 text-xl text-md font-bold cursor-pointer"
const NavigationButton: React.FC<ButtonProps> = ({ text, path, className }) => {
  let navigate = useNavigate();
  return (
    <button className={className} onClick={() => routeTo(path, navigate)}>{text}</button>
  )
}

export default NavigationButton;