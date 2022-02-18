import {Logo} from "../assets/Ui";
import SearchInput from "../components/Search/SearchInput";

const LayoutHeader = () => {
  return (
      <div className="parent">
    <nav className="navbar navbar-dark bg-blue">
      <div className="nav-brand"><Logo/></div>
      <div className="navbar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <SearchInput/>
          </li>
          {/* <li className="nav-item">
            <a href="#" className="nav-link">
              Category
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
    </div>
  );

}

export default LayoutHeader