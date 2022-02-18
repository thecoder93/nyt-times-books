import React from 'react'
import styled from 'styled-components'

const WrapperLayout = styled.div`
background: #E5E5E5;
margin: 100px 15px 60px 15px;
font-size: 16px;
line-height: 1.3;

`

const Layout = ({children}: any) => {
  return <WrapperLayout>{children}</WrapperLayout>
}

export default Layout