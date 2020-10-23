import React from "react";
import styled from "styled-components";

// img
import rewards_logo from "../../images/rewards-logo.png";

const Content3 = styled.section`
background: #1e3932;
width : 100%;
.wrapper {
    max-width : 1080px;
    margin : 0 auto;
    display: flex;

    height: 167px;
    padding: 35px 0;
    color: white;
    a {
      border: 2px solid white;
      border-radius: 5px;
      padding: 10px 18px;
      &:hover {
        text-decoration: underline;
      }
    }
    img {
      width: 176px;
      height: 152px;
    }
    .reward_contents {
        width : 100%;
      padding: 0 40px;
     
      .reward_text {
          border-bottom : 0.5px solid white;
          h2{
              margin : 0px;
              font-size : 26px;
          }
          .reward_text_login{
              display : flex;
              justify-content : space-between;
              p {
                  margin-right : 50px;
                  margin : 0;
                  padding : 16px 0;
              }
              .btns {
                padding : 22px 0 16px 0;
                #green {
                    background : #00704a;
                    border : 1px solid #00704a;
                }
                a {
                    margin : auto 0;
                    margin-left : 10px;
                    position : relative;
                    right : 0;
                    font-weight : bold;
                  }
              }
          }
      }
      .ecard_text {
          display : flex;
          justify-content : space-between;
          padding : 16px 0;
          p {
              margin : 0px;
          }
      }
    }
    @media (max-width : 1030px){
      .wrapper {
        &>img {

        }
        .reward_contents {
          .reward_text {

          }
          .ecard_text {
            
          }
        }
      }
    }
`;

const Content03 = () => {
  return (
    <Content3>
      <div className="wrapper">
        <img src={rewards_logo} alt="rewards_logo" />
        <div className="reward_contents">
          <div className="reward_text">
            <h2>스타벅스만의 특별한 혜택, 스타벅스 리워드</h2>
            <div className="reward_text_login">
              <p>
                <strong>스타벅스 회원이세요?</strong> 로그인을 통해 나만의
                리워드를 확인해보세요.
                <br />
                <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해 리워드
                혜택을 즐기세요.
              </p>
              <div className="btns">
                <a id="green" href="/">
                  회원가입
                </a>
                <a href="/">로그인</a>
              </div>
            </div>
          </div>
          <div className="ecard_text">
            <p>
              회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로
              구매하시고, 편리하게 등록하세요!
              <br />
              카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면
              무료 음료쿠폰을 드립니다!
            </p>
            <a href="/">e-Gift Card 선물하기</a>
          </div>
        </div>
      </div>
    </Content3>
  );
};

export default Content03;
