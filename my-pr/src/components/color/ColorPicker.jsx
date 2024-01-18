import { useSelector, useDispatch } from "react-redux";
import { addColor } from "./colorSlice";

const ColorPicker = () => {
  const dispatch = useDispatch();
  const { color1, color2 } = useSelector((state) => state.colorPicker);

  return (
    <div
      className=""
      style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
    >
      <div className={`grid h-screen grid-cols-2 items-center gap-x-28`}>
        <input
          className="ml-auto"
          type="color"
          value={color1}
          onChange={(e) => dispatch(addColor({ color: e.target.value, id: 1 }))}
        />
        <input
          type="color"
          value={color2}
          onChange={(e) => dispatch(addColor({ color: e.target.value, id: 2 }))}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
