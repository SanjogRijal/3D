const HeaderComponent = () => {
  const h1 = document.createElement("h1");
  const style = "position: absolute; left: 100px; top: 100px; color: white";
  h1.setAttribute("style", style);
  h1.innerHTML = "3D By Sanjog Rijal";

  const parentElement = document.querySelector("#app");
  parentElement?.appendChild(h1);
};

export default HeaderComponent;
