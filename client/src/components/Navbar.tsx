const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>Logo</div>
        <div>
          <ul className="flex gap-2">
            <li>Home</li>
            <li>Categories</li>
            <li>Promo</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <div>Account</div>
          <div>Cart</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
