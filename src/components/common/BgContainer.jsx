import React from 'react'
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

function BgContainer() {
  return (
    <>
      <FullScreen>
        <Outlet />
      </FullScreen>
    </>
  )
}

const FullScreen = styled.div`
  width: 100vw;
  height: calc(100vh + 54px);
  background-color: var(--bg-01);
  color: var(--po-01);
  background-image: ${(props) =>
    `url(${process.env.PUBLIC_URL}/image/bg.png)`
  };
  background-repeat: no-repeat;
  background-size: cover;
`

export default BgContainer