import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 2rem;
  ${mobile({ padding: '0.5rem' })}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ marginBottom: '1rem' })}
`
const Top = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  ${mobile({ padding: '0rem' })}
`
const TopButton = styled.button`
  padding: 1rem;
  height: 100%;
  cursor: pointer;
  /* border: ${(props) => props.type === 'filled' && 'none'}; */
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};

  ${mobile({ padding: '0.5rem' })}
`
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 1rem;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`
const Image = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  ${mobile({ width: '10rem', height: '10rem' })}
`
const Details = styled.div`
  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${mobile({ padding: '0rem 2rem', fontSize: '1.4rem' })}
`
const ProductName = styled.span``
const ProductId = styled.span``
const Color = styled.span`
  display: flex;
  align-items: center;
`
const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 0 1rem;
  ${mobile({ width: '1rem', height: '1rem', margin: '0 0.5rem' })}
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`
const Amount = styled.div`
  font-size: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
  border: 0.1rem solid teal;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  ${mobile({
    width: '2rem',
    height: '2rem',
    borderRadius: '0.4rem',
    fontSize: '1.6rem',
  })}
`

const ProductPrice = styled.div`
  font-size: 3rem;
  font-weight: 200;
  ${mobile({ fontSize: '2.4rem' })}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 0.1rem;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const SummaryTitle = styled.h1`
  font-weight: 400;
  ${mobile({ fontSize: '3rem' })}
`
const SummaryItem = styled.div`
  /* margin: 3rem 0rem; */
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && 600};
  font-size: ${(props) => props.type === 'total' && '2.4rem'};
  ${mobile({ margin: '1.5rem' })}
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  padding: 1.6rem;
  background-color: black;
  color: white;
  font-weight: 500;
  width: 100%;

  /* position: absolute; */
  /* bottom: 0%;
  
  left: 10%;
  bottom: 5%; */

  ${mobile({ position: 'static', width: '100%' })}
`

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton type>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" />
                <Details>
                  <ProductName>
                    <b>Name: </b> JESSIE T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 123456789
                  </ProductId>
                  <Color>
                    <h4>Color:</h4>
                    <ProductColor color="orange" />
                    <ProductColor color="black" />
                    <ProductColor color="blue" />
                  </Color>
                  <ProductSize>
                    <b>Size: </b> 37.5cm
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmount>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                <Details>
                  <ProductName>
                    <b>Name: </b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 123456789
                  </ProductId>
                  <Color>
                    <h4>Color:</h4>
                    <ProductColor color="orange" />
                    <ProductColor color="black" />
                    <ProductColor color="blue" />
                  </Color>
                  <ProductSize>
                    <b>Size: </b> 37.5cm
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmount>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>$80</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charges</SummaryItemText>
              <SummaryItemText>$10</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>$-5.60</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$90</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Cart