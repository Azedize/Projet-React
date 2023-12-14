import Card from './Compenents/cards/Cards';
import Header from './Compenents/Header/Header'
import { Route, Routes } from 'react-router-dom';
import CardProduct from './Compenents/CardProduct/CardProduct';
import SignUp from './Form/SignUp';
import Login from './Form/Login';
import Users from './Users/Users';
import Produit from './Produits/Produits'
import AjouterProduit from './Produits/AjouterProduit'
import Homme from './Compenents/Homme/Homme';
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import './style.css'
import './medai.css'
function App() {

  const Email = localStorage.getItem('email') ;
  const user = useSelector((state) => state.Users?.find(el => el.email === Email));
  
  return (

    <div className="App">
        <Routes>
        <Route path="/" element={<> <Header num='1' /><Homme /></>  } />
        <Route path="/Ville" element={<><Header num='122' /><Card Categorie="Ville" /></>} />
        <Route path="/Villes_emblematiques" element={<><Header num='122' /><Card Categorie="Villes_emblematiques" /></>} />
        <Route path="/Campagne" element={<><Header num='122' /><Card Categorie="Campagne" /></>} />
        <Route path="/Desert" element={<><Header num='122' /><Card Categorie="Desert" /></>} />
        <Route
          path="/:cat/:id"
          element={
            <>
              {Email ? (
                <><Header num='1' /><CardProduct /></>

              ) : (
                <>
                  <Header num='1' />
                  <Login />
                </>
              )}
            </>
          }
        />
        <Route path="/register" element={<><SignUp /></>} />
        <Route path="/Login" element={<><Login /></>} />
        <Route path="/User" element={
        <>  
            {(Email && user?.function === "Admin")  ? (
              <><Header num='1' /><Users /></>

              ) : (
                <>
                  <Alert key="danger" variant="danger" className='m-3'>
                    Nous sommes désolés! Vous n'êtes pas autorisé à consulter cette page !!
                  </Alert>

                </>
              )}
            </>
        } />
        <Route path="/Produit" element=
          {(Email && user?.function === "Admin") ? (
          <><Header num='1' /><Produit /></>
          ) : (
            <>
              <Alert key="danger" variant="danger" className='m-3'>
                Nous sommes désolés! Vous n'êtes pas autorisé à consulter cette page !!
              </Alert>

            </>
          )}
        />
        <Route path="/AjouterProduit" element={
          (Email && user?.function === "Admin") ? (
            <><Header num='1' /><AjouterProduit /></>  ) : (
            <>
                <Alert key="danger" variant="danger" className='m-3'>
                  Nous sommes désolés! Vous n'êtes pas autorisé à consulter cette page !!
                </Alert>

            </>
          )}
        />
        <Route path="*" element={<><Header num='1' /><h1 className='h1'>404</h1></>} />
        </Routes>
    </div>
  );
}

export default App;
