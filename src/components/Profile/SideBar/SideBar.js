import avatar from "../../../images/avatar.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__content">
        <img
          className="sidebar__avatar"
          src={avatar}
          alt="sidebar avatar icon"
        />
        <p className="sidebar__name">Terrence Tegegne</p>
      </div>
    </section>
  );
};

export default SideBar;
