import React from "react";
import Center from "./Center";
import styled from "styled-components";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import Button from "./Button";
import { useCart } from "@/providers/CartContext";
import FlyingButton from "./FlyingButton";
import { RevealWrapper } from "next-reveal";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const FeaturedProduct = ({ product }) => {
  // const { addProduct } = useCart();

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>

              <ButtonsWrapper>
                <ButtonLink href={"/products/" + product._id} $white $outline>
                  Read More
                </ButtonLink>

                <FlyingButton
                  white={1}
                  _id={product._id}
                  src={product.images[0]}
                >
                  <CartIcon />
                  Add to Cart
                </FlyingButton>
              </ButtonsWrapper>
            </div>
          </Column>

          <Column>
            {/* <RevealWrapper> */}
            <img src={product.images[0]} />
            {/* </RevealWrapper> */}
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
};

export default FeaturedProduct;

{
  /* <Image
  src={
    "https://next-ecommerce-rahim.s3.amazonaws.com/1728301343982.png"
  }
  width={350}
  height={200}
  alt="Image of Macbook"
  priority
/> */
}
