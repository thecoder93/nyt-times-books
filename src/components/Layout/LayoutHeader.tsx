import styled from "styled-components";
import { Logo } from "../../assets/Ui";
import SearchInput from "../Search/SearchInput";

const WrapperLayout = styled.div`
  .navbar {
    display: block;
    padding: 1rem;
  }

  .nav-brand {
    text-align: center;
    margin-right: auto;
  }

  .navbar-nav {
    justify-content: center;
    margin: auto;
  }

  @media only screen and (min-width: 768px) {
    .navbar {
      display: flex;
    }

    .navbar-nav {
      text-align: left;
      margin: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    .navbar {
      display: flex;
      
    }

    .navbar-nav {
      width: auto;
      margin: 0;
    }

    .nav-brand {
      text-align: left;
    }
  }
`;
const LayoutHeader = () => {
  return (
    <WrapperLayout>
      <div className="parent">
        <nav className="navbar navbar-dark bg-blue">
          <div className="nav-brand">
            <Logo />
          </div>
          <div className="navbar-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <SearchInput />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </WrapperLayout>
  );
};

export default LayoutHeader;
