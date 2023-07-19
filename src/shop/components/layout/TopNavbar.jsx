import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import {  Tokens, apiBaseUrls } from "../../consts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../store/actions/authActions";
import { fetchCartItemCount } from "../../store/actions";

function TopNavbar() {
  const token = localStorage.getItem(Tokens.CUSTOMER);
  const { count  } = useSelector((state) => state.count);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () =>{
    dispatch(logout()).then(() => {
      navigate(apiBaseUrls.HOME);
  });
  }
  useEffect(() => {
    if(token){
      dispatch(fetchCartItemCount());
    }

  }, [token]);
  return (
    <>
      <Navbar key="md" className="bg-body-tertiary ">
        <Container fluid className="" style={{ background: "rgb(233 151 68)" }}>
          <Navbar.Brand
            className="text-white"
            href="/"
            style={{ paddingLeft: "30px" }}
          >
            Su Su Store
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end gap-3 p-2 flex-grow-1 pe-3 text-white">
                {/* <span className="position-relative mt-2">
                  <FontAwesomeIcon className="m-2" icon={faHeart} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99
                  </span>
                </span> */}
                <span className="position-relative mt-2">
                  <a href={apiBaseUrls.CARTLIST} className="text-white"><FontAwesomeIcon className="m-2" icon={faShoppingCart} /></a>
                  
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {count}
                  </span>
                </span>
                <span className="position-relative mt-2">
                  <Dropdown>
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        className="m-2 text-white"
                        icon={faUser}
                      />
                    </Dropdown.Header>
                    <ul className="dropdown-menu dropdown-menu-right">
                    {token?
                      <>
                      
                      {/* <li>
                        <a className="dropdown-item" href={apiBaseUrls.CHECKOUT_LIST}>
                          Checkout
                        </a>
                      </li> */}
                      <li>
                        <a className="dropdown-item" href={apiBaseUrls.ORDERLIST}>
                          My Order
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </a>
                      </li></>
                      :
                      <>
                      <li>
                        <a className="dropdown-item" href={apiBaseUrls.REGISTER}>
                          Register
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={apiBaseUrls.LOGIN}>
                          Login
                        </a>
                      </li>
                      </>}
                      
                      
                    </ul>
                  </Dropdown>
                </span>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
