import React from 'react'
import styled from 'styled-components';


function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src='images/slider-badag.jpg' />
        </Wrap>
        <Wrap>
          <img src='images/slider-badging.jpg' />
        </Wrap>   
        <Wrap>
          <img src='images/slider-badag.jpg' />
        </Wrap>           
        <Wrap>
          <img src='images/slider-badag.jpg' />
        </Wrap>
        <Wrap>
          <img src='images/slider-badging.jpg' />
        </Wrap>   
        <Wrap>
          <img src='images/slider-badag.jpg' />
        </Wrap>           
        <Wrap>
          <img src='images/slider-badag.jpg' />
        </Wrap>
        <Wrap>
          <img src='images/slider-badging.jpg' />
        </Wrap>   
        <Wrap>
          <img src='images/slider-badag.jpg' />
        </Wrap>           
       </Content>
    </Container>
  )
}

export default Movies

const Wrap = styled.div`
height: 100px; //this will be remove
cursor: pointer;
border-radius: 10px
overflow: hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05)
  }
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Container = styled.div`
`
