const PanelTitle = () => {
  const { name } = JSON.parse(localStorage.getItem("userData") as string) || {
    name: "Guest",
  };

  return <h2 className="text-lg md:text-xl">Hi, {name}</h2>;
};

export default PanelTitle;
