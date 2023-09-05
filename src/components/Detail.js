import React from 'react'
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      < Background>
        <img src='images/bg.png' />
      </Background>
      <ImageTitle>
        <img src='images/bgImg.png' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src='images/play-icon-white.png' />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='images/group-icon.png' />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2023 * 7m * Family, Fantasy, Kids, Animation
      </SubTitle>
      <Discription>
        A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
      </Discription>
    </Container>
  )
}

export default Detail

const Discription = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width: 700px;
`

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`



const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
diplay: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.5);
cursor: pointer;
span {
  font-size: 30px;
}
`
const GroupWatchButton = styled(AddButton)`
background-color: rgba(0, 0, 0, 0.7);
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
padding: 0 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;

&:hover {
  background: rgb(198, 198, 198);
 }
`

const TrailerButton = styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border: 3px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`

const Controls = styled.div`
display: flex;
align-items: center;
`

const ImageTitle = styled.div`
margin-top: 60px;
margin-left: -25px;
height: 31vh;
width: 25vw;
min-height: 170px;
min-width: 200px;
opacity: 0.8;
`

const Background = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
opacity: 0.8;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
