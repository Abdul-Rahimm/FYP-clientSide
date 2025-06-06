import styled from "styled-components";
import { ButtonStyle } from "./Button";
import { primary } from "@/lib/colors";
import FlyingButtonOriginal from "react-flying-item";
import { useCart } from "@/providers/CartContext";

const FlyingButtonWrapper = styled.div`
  button {
    ${ButtonStyle}
    font-weight: 500;
    ${(props) =>
      props.main
        ? `background-color:  ${primary};
    color: white;`
        : `background-color: transparent;
    border: 1px solid ${primary};
    color: ${primary};`}

    ${(props) =>
      props.white &&
      `
    background-color:white;
    border: 1px solid white
  `}
  }
`;

export default function FlyingButton(props) {
  const { addProduct } = useCart();

  return (
    <FlyingButtonWrapper
      white={props.white}
      main={props.main}
      onClick={() => addProduct(props._id)}
    >
      <FlyingButtonOriginal
        {...props}
        targetTop={"5%"}
        targetLeft={"95%"}
        flyingItemStyling={{
          width: "auto",
          height: "auto",
          maxWidth: "60px",
          maxHeight: "60px",
          borderRadius: 0,
        }}
      />
    </FlyingButtonWrapper>
  );
}
