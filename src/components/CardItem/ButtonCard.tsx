import { IconCalculator } from "../assets";
import { MuiButton, TextButton, Wrapper } from "./styles";

const ButtonCard = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <MuiButton onClick={onClick}>
      <Wrapper>
        <IconCalculator />
        <TextButton>{text}</TextButton>
      </Wrapper>
    </MuiButton>
  );
};

export default ButtonCard;
