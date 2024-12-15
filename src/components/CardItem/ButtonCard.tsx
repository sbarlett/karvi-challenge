import { IconCalculator } from "../assets";
import { MuiButton, TextButton, Wrapper } from "./styles";

const ButtonCard = ({
  text,
  onClick,
  viewCard,
}: {
  text: string;
  onClick: () => void;
  viewCard: "grid" | "list";
}) => {
  return (
    <MuiButton onClick={onClick} viewCard={viewCard}>
      <Wrapper>
        <IconCalculator />
        <TextButton>{text}</TextButton>
      </Wrapper>
    </MuiButton>
  );
};

export default ButtonCard;
