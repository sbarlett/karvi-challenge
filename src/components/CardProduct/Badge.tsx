import { BadgeContainer, BadgeText } from "./styles";

const Badge = ({ value }: { value: string | number }) => {
  return (
    <BadgeContainer>
      <BadgeText>{value}</BadgeText>
    </BadgeContainer>
  );
};

export default Badge;
