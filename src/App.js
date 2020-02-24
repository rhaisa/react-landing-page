import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import business from './business.png';
import storm from './storm.png';
import leftWhisp from './leftWhispWhiteBg.png';
import topBlue from './topBlueBackground.png';
import iceberg1 from './iceberg1.png';
import iceberg2 from './iceberg2.png';
import whiteBox from './whiteBox.svg';
import grafico from './grafico.png';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 43px 100px;
  justify-content: space-between;
  max-width: 1800px;
`;

const LeftWhisp = styled.img`
  width: 100%;
  /* position: relative; */
  transform: rotateY(180deg);
  width: 800px;
  height: 400px;
  justify-content: flex-end;
  margin-top: -127px;
  margin-left: 700px;
  margin-bottom: -115px;
`;

const Logo = styled.img`
  justify-content: flex-start;
  width: 100px;
  margin-left: 70px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: flex-end;
  color: #e56135;

  a {
    color: #e56135;
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 18px;
    /* font-weight: 800; */
    margin-right: 48px;
  }

  a:last-child {
    margin-right: 0;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-image: url(${storm});
  background-size: 80%;
  height: 885px;
  background-repeat: no-repeat;
  background-position-x: 187%;
`;

const HeroLeft = styled.div`
  /* line-height: 85px; */
  /* font-weight: bold; */
  flex-direction: columns;
  width: 484px;
  color: #29182f;
  padding-left: 171px;
  position: relative;

  h1 {
    font-family: serif;
    font-size: 80px;
    font-weight: bold;
  }

  p {
    font-family: Helvetica, sans-serif;
    font-size: 25px;
    margin-bottom: 30px;
  }

  a {
    font-size: 15px;
  }
`;

const Button = styled.button`
  background-color: #e56135;
  border-radius: 36px;
  color: white;
  height: 37px;
  width: 195px;
  font-size: 15px;
  font-weight: 700;
`;

const HeroRight = styled.div`
  flex: 1;
  position: relative;

  img {
    height: auto;
    position: absolute;
    width: 300px;
    right: 170px;
    margin-top: 19px;
    animation: float infinite 3s ease-in-out;
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
`;
const BottomWhisp = styled.img`
  /* position: relative; */
  /* width: 200px; */
  height: 500px;
  top: 256px;
  position: absolute;
  z-index: -3;
  left: 0px;
`;

const ContentWrap = styled.div`
  background-color: rgb(61, 73, 110);
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: -10px;
  z-index: -2;
  position: relative;

  > div {
    margin-bottom: 250px;
    margin-left: 419px;
  }
  h5 {
    color: rgb(253, 236, 193);
    margin: 0px 0px 52px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    line-height: normal;
    font-family: 'Helvetica Neue';
  }

  h2 {
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 60px;
    line-height: 69px;
    font-weight: bold;
    font-family: serif;
  }
  p {
    color: white;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    display: block;
    max-width: 615px;
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
  }
  a {
    color: rgb(255, 176, 149);
    text-decoration: none;
    transition: color 0.3s ease 0s;
  }
`;
const Iceberg1 = styled.img`
  left: -243px;
  width: 614px;
  position: absolute;
  z-index: -1;
`;
const Iceberg2 = styled.img`
  right: -243px;
  width: 614px;
  position: absolute;
  z-index: -1;
`;

const BlueBackground = styled.img`
  width: 1600px;
  position: relative;
  overflow: hidden;
  z-index: -2;
  margin-top: -874px;
  margin-left: -46px;
`;
const WhiteBox = styled.img`
  display: block;
  margin-top: -92px;
  z-index: 99;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const WhiteSheet = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -1.5px;
  width: 3px;
  height: 800px;
  background-image: linear-gradient(
    white,
    rgb(108, 129, 180) 5%,
    rgb(108, 129, 180) 95%,
    white
  );
`;
const TopText = styled.div`
  text-align: center;
  h5 {
    color: rgb(108, 129, 180);
    font-size: 24px;
    font-weight: bold;
    line-height: normal;
    margin-bottom: 25px;
    margin-top: -120px;
    font-family: 'Helvetica Neue';
  }
  h2 {
    font-size: 64px;
    line-height: 69px;
    font-weight: bold;
    font-family: serif;
  }
`;

const Solutions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 174px;
  margin-top: 140px;
  flex-direction: row;
  position: relative;

  h4 {
    color: rgb(61, 73, 110);
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 21px;
    font-family: serif;
    align-items: flex-start;
  }
  p {
    font-size: 25px;
    line-height: 36px;
    color: rgb(41, 24, 47);
    align-items: flex-start;
  }

  h6 {
    width: 50px;
    height: 50px;
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    color: rgb(108, 129, 180);
    /* position: absolute; */
    right: -26px;
    top: 50%;
    margin-top: -160px;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    border-radius: 25px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(189, 201, 234);
    border-image: initial;
    margin-left: 520px;
  }
  img {
    position: absolute;
    display: flex;
    width: 537px;
    align-items: flex-end;
    margin-left: 658px;
    margin-top: -285px;
  }
`;

export default function App() {
  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />

        <NavBar>
          <a href="https://siftnewstherapy.com/why-sift">Why Sift</a>
          <a href="https://siftnewstherapy.com/frequently-asked-questions">
            FAQ
          </a>
          <a href="https://siftnewstherapy.com/resources">Resources</a>
        </NavBar>
      </Header>
      <LeftWhisp src={leftWhisp} alt="background image" />
      <Hero>
        <HeroLeft>
          <h1>
            Feel news
            <br />
            differently
          </h1>
          <p>Sift unpacks contentious issues to help reduce news anxiety.</p>
          <Button href="https://apps.apple.com/app/id1438072798">
            Download the App
          </Button>
          <BottomWhisp src={leftWhisp} alt="background image" />
        </HeroLeft>
        <HeroRight>
          <img src={business} alt="Business Man" />
        </HeroRight>
      </Hero>
      <BlueBackground src={topBlue} alt="background image" />
      <ContentWrap>
        <div>
          <h5>The Problem</h5>
          <Iceberg1 src={iceberg1} alt="Iceberg Left" />
          <Iceberg2 src={iceberg2} alt="Iceberg Rigth" />

          <h2>
            Our nation is divided, <br /> and it's stressing us out
          </h2>
          <p>
            According to a{' '}
            <a href="https://www.pewresearch.org/fact-tank/2018/06/05/almost-seven-in-ten-americans-have-news-fatigue-more-among-republicans/">
              {' '}
              2018 Pew study
            </a>
            , nearly two-thirds of people in the U.S. feel stressed by the news.
          </p>

          <p>
            When news anxiety leads to feelings of helplessness and
            hopelessness, our civic engagement and democracy inevitably suffer.
          </p>
          <p>
            Tough topics become less overwhelming when we grant ourselves the
            time, space, and attention to pursue deeper understanding.
          </p>
        </div>
      </ContentWrap>
      <WhiteBox src={whiteBox} alt="White Box"></WhiteBox>
      <TopText>
        <div>
          <h5>How Sift Helps</h5>
          <h2>
            {' '}
            Introducing <br /> News Therapy
          </h2>
        </div>
      </TopText>
      <WhiteSheet />
      <Solutions>
        <div>
          <h4>
            We shed light on the <br /> backstory
          </h4>
          <p>
            How did we get here? Explore <br /> the history of today’s issues.
          </p>
          <h6> 1 </h6>
          <img src={grafico} alt="White Box" />
        </div>
      </Solutions>
    </>
  );
}
