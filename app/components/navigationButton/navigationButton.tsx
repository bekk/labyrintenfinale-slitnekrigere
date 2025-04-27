import { useNavigate } from "react-router";

interface ButtonProps {
  text: string;
  path: string;
  className?: string;
}

function routeTo(name: string, goTo: (a: string) => void) {
  goTo(name);
}
 
const NavigationButton: React.FC<ButtonProps> = ({ text, path, className }) => {
  let navigate = useNavigate();
  return (
    <button className={className} onClick={() => routeTo(path, navigate)}>{text}</button>
  )
}

export default NavigationButton;