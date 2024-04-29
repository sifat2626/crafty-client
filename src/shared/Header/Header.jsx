/* eslint-disable react/prop-types */
function Header({ handleThemeSwitch, theme }) {
  return (
    <div className=" text-white py-4  flex justify-between px-8  bg-gray-900">
      <h3>ClayZen</h3>
      <h2>Summer sale discount 50% off</h2>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white mr-4">Light</span>
          <input
            type="checkbox"
            className="toggle"
            checked={theme === "dark"}
            onChange={handleThemeSwitch}
          />
          <span className="label-text text-white ml-4">Dark</span>
        </label>
      </div>
    </div>
  );
}

export default Header;
