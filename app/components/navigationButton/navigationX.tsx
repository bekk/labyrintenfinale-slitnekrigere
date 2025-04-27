import NavigationButton from "./navigationButton"

interface ButtonProps {
  text: string;
  path: string;
}  
  
// example style for x in corner: "absolute top-5 left-5 text-gray-700 text-xl text-md font-bold cursor-pointer"
const NavigationX: React.FC<ButtonProps> = ({ text, path }) => {
  return (
    <NavigationButton text={text} path={path} className="absolute top-5 left-5 text-gray-700 text-xl text-md font-bold cursor-pointer" />
  )
}

export default NavigationX;