import { NavLink, useNavigate } from 'react-router-dom';
import { ModalDiv } from './mobileModal.styled';
import { ReactComponent as ButtonClose } from '../../img/x-modal.svg';
import { ReactComponent as Switch } from '../../img/switch-horizontal-01.svg';
import { ReactComponent as User } from '../../img/gridicons_user-modal.svg';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations.js';
import { useSelector } from 'react-redux';

export default function MobileModal({ handleClickClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(authOperations.logOut()).then(navigate('/'));
  };
  const userName = useSelector((state) => state.auth.name);

  const handleCloseModal = () => {
    handleClickClose();
  };

  return (
    <ModalDiv>
      <div className="HeaderOfModal">
        <div className="UserContainer">
          <p className="UserName">{userName}</p>
          <span className="UserImag">
            <User className="user-icon" />
          </span>
        </div>
        <div className="UserContainer"></div>
        <ButtonClose className="ButtonClose" onClick={handleClickClose} />
      </div>
      <ul className="NavList">
        <li>
          <NavLink
            className="NavElement"
            to="/dictionary"
            onClick={handleCloseModal}
          >
            Dictionary
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavElement"
            to="/recommend"
            onClick={handleCloseModal}
          >
            Recommend
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavElement"
            to="/training"
            onClick={handleCloseModal}
          >
            Training
          </NavLink>
        </li>
        <button className="ButtonLogOut" onClick={handleSubmit}>
          Log Out
          <Switch className="SwitchIcon" />
        </button>
      </ul>
      <div className="Img" />
    </ModalDiv>
  );
}
