import ListBooks from './components/ListBooks/ListBooks';
import Layout from './styles/Layout';
import LayoutHeader from './styles/LayoutHeader';
import './styles/css/header.css';

function App() {
  
  return (
    <>
        <Layout>
          <ListBooks>
              <LayoutHeader />
          </ListBooks>
        </Layout>
    </>
  );
}

export default App;
