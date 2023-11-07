import avatar from "../../../images/avatar.svg";
import "./SideBar.css";

const SideBar = ({onLogOut}) => {
  return (
    <section className="sidebar">
      <div className="sidebar__content">
        <img
          className="sidebar__avatar"
          src={avatar}
          alt="sidebar avatar icon"
        />
        <p className="sidebar__name">Terrence Tegegne</p>
        <button className="sidebar__button-logout" type="button" onClick={onLogOut} >
          Log Out
        </button>
      </div>
    </section>
  );
};

export default SideBar;
