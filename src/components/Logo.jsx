import LogoPic from "../assets/logo-big-greenRed.png";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={LogoPic}></img>
    </div>
  );
};

export default Logo;
