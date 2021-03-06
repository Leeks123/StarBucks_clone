import React, { useState, useEffect, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import styled, { css } from "styled-components";
import { SidebarContext } from "../../context/SidebarContext";

const StyledNavSearch = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 7px;
  margin: 8px;
  background: white;
  border: 1px solid #555555;
  border-radius: 5px;
  .wrapper {
    display: flex;
    & > input {
      height: 20px;
      margin-right: 10px;
      border: 0px;
      padding: 0px;
    }
    span {
      display: none;
    }
  }

  @media (max-width: 950px) {
    ${(props) =>
      props.sidebarOpened && props.sidebarOpened === true
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
    border-radius: 0px;
    padding: 0px;
    margin: 0px;
    position: absolute;
    right: -1px;
    width: 70vw;
    height: 112px;
    background: #403a36;
    .wrapper {
      width: 456px;
      height: 50px;
      margin: 31px auto;
      input {
        width: 315px;
        height: 100%;
        border-radius: 5px;
      }
      .search_wrapper {
        height: 100%;
        width: 125px;
        border-radius: 5px;
        background: #666;
        svg {
          display: none;
        }
        span {
          padding: 5px 0;
          display: block;
          font-size: 24px;
          color: white;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 670px) {
    .wrapper {
      width: 302px;
      height: 50px;
      margin: 31px auto;
      input {
        width: 192px;
        height: 100%;
        border-radius: 5px;
      }
      .search_wrapper {
        width: 100px;
        span {
          padding: 13px 0;
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 480px) {
    height: 71px;
    .wrapper {
      width: 220px;
      height: 30px;
      margin: 20.5px auto;
      input {
        width: 192px;
        height: 100%;
        border-radius: 5px;
      }
      .search_wrapper {
        width: 100px;
        span {
          padding: 8px 0;
          font-size: 14px;
        }
      }
    }
  }
`;

const NavSearch = () => {
  const { sidebarOpened } = useContext(SidebarContext);
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (width < 950) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [width]);

  const onClick = () => {
    setClicked(true);
  };

  return (
    <StyledNavSearch sidebarOpened={sidebarOpened}>
      <div className="wrapper">
        {clicked && <input placeholder="  통합검색" />}
        <div className="search_wrapper">
          <BsSearch size="20" onClick={onClick} />
          <span>Search</span>
        </div>
      </div>
    </StyledNavSearch>
  );
};

export default NavSearch;
