import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/Craftwork.svg';
import { ReactComponent as User } from '../img/icons_user-2.svg';
import { ReactComponent as Burger } from '../img/Nav.svg';
import { ReactComponent as Switch } from '../img/switch-horizontal-01.svg';
import { MainContainer } from './layout.styled';
import { Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import Modals from '../modals/modals';
import Loader from '../components/loader/loader';

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isModalOpenAddWord, setIsModalOpenAddWord] = useState(false);
  const [isModalOpenClickWord, setIsModalOpenClickWord] = useState(false);
  const [isModalOpenConfirmation, setIsModalOpenConfirmation] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpenWellDone, setIsModalOpenWellDone] = useState(false);

  const userName = useSelector((state) => state.auth.name);

  const handleSubmit = () => {
    dispatch(authOperations.logOut()).then(() => navigate('/'));
  };

  const handleOpenModalMobile = () => setIsMobileModalOpen(true);
  const handleCloseModal = () => {
    setIsMobileModalOpen(false);
    setIsModalOpenAddWord(false);
    setIsModalOpenClickWord(false);
    setIsModalOpenConfirmation(false);
    setIsModalOpenEdit(false);
    setIsModalOpenWellDone(false);
  };

  return (
    <div className="container">
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

            <Burger className="ButtonBurger" onClick={handleOpenModalMobile} />
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
        isModalOpenWellDone) && (
        <Modals
          isMobileModalOpen={isMobileModalOpen}
          isModalOpenAddWord={isModalOpenAddWord}
          isModalOpenClickWord={isModalOpenClickWord}
          isModalOpenConfirmation={isModalOpenConfirmation}
          isModalOpenEdit={isModalOpenEdit}
          isModalOpenWellDone={isModalOpenWellDone}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
