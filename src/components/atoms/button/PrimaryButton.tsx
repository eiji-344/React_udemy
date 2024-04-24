import { ReactNode, FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = props => {
  const {
    children,
    disabled = false,
    loading = false,
    onClick
  } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      isDisabled={disabled}
      isLoading={loading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};