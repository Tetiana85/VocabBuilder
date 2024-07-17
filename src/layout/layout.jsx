import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/Craftwork.svg';
import { ReactComponent as User } from '../img/gridicons_user-2.svg';
import { ReactComponent as Burger } from '../img/Nav.svg';
import { ReactComponent as Switch } from '../img/switch-horizontal-01.svg';
import { MainContainer } from './layout.styled';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModalMobile } from '../redux/modals/modal-slice';
import authOperations from '../redux/auth/auth-operations';
import Modals from '../modals/modals';
import { Footer } from '../modals/footer/footer';
import Loader from '../components/loader/loader';

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  const isModalOpenAddWord = useSelector(
    (state) => state.modal.isModalOpenAddWord
  );
  const isModalOpenClickWord = useSelector(
    (state) => state.modal.isModalOpenClickWord
  );
  const isModalOpenConfirmation = useSelector(
    (state) => state.modal.isModalOpenConfirmation
  );
  const isModalOpenEdit = useSelector((state) => state.modal.isModalOpenEdit);
  const isModalOpenWellDone = useSelector(
    (state) => state.modal.isModalOpenWellDone
  );
  const userName = useSelector((state) => state.auth.name);

  const handleSubmit = () => {
    dispatch(authOperations.logOut()).then(navigate('/'));
  };

  return (
    <>
      <MainContainer>
        <NavLink to="/" className="LogoContainer">
          <Logo className="Logo" />
          <h2 className="LogoTitle">VocabBuilder</h2>
        </NavLink>
        {userName && (
          <ul className="NavigationContainer">
            <li>
              <NavLink className="NavElement" to="/dictionary">
                Dictionary
              </NavLink>
            </li>
            <li>
              <NavLink className="NavElement" to="/recommend">
                Recommend
              </NavLink>
            </li>
            <li>
              <NavLink className="NavElement" to="/training">
                Training
              </NavLink>
            </li>
          </ul>
        )}

        {userName && (
          <div className="RightSideHeader">
            <div className="UserContainer">
              <p className="UserName">{userName}</p>
              <span className="UserImag">
                <User />
              </span>
            </div>
            <button className="ButtonLogOut" onClick={handleSubmit}>
              Log Out
              <Switch className="SwitchIcon" />
            </button>

            <Burger
              className="ButtonBurger"
              onClick={() => dispatch(openModalMobile())}
            />
          </div>
        )}
      </MainContainer>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      {(isMobileModalOpen ||
        isModalOpenAddWord ||
        isModalOpenClickWord ||
        isModalOpenConfirmation ||
        isModalOpenEdit ||
        isModalOpenWellDone) && <Modals />}
      <Footer />
    </>
  );
}
