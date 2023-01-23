import "../styles/MaterialIcons.css";

const MaterialIcons = ({ bgcolor, icon }) => {
  return (
    <div style={{ backgroundColor: bgcolor }} className="icon">
      <img src={icon} alt="" />
    </div>
  );
};

export default MaterialIcons;
