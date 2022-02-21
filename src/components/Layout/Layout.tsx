import styled from 'styled-components'
import { light_grey } from '../../styles/colors'

const WrapperLayout = styled.div`
background: ${light_grey};
margin: 150px 15px 60px 0px;

h1 {
  font-size: 26px;
  line-height: 1.3;
  text-align: center;
}



@media only screen and (min-width: 768px) { 
  margin: 100px 15px 60px 15px;
  font-size: 16px;
  line-height: 1.3;

}

@media only screen and (min-width: 1024px) { 
  margin: 100px 15px 60px 15px;
  font-size: 16px;
  line-height: 1.3;
}


`

const Layout = ({children}: any) => {
  return <WrapperLayout>{children}</WrapperLayout>
}

export default Layout