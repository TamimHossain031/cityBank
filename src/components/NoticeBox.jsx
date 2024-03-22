import charvon from "../assets/6BoJxkw0x-DfJ109.png";
export default function Notice() {
  return (
    <div className="w-full px-5 h-[485px] bg-hero-background pt-8">
      <div className="w-[207px] min-h-[30px] bg-[#ABABAB] rounded-md p-3">
        <p>
          First time here? <button>Register</button>
        </p>
        <p>Sign On to Citibank Online</p>
        <label htmlFor="userId">User Id</label>
        <input className="w-full " type="text" id="userId" />
        <label htmlFor="userPass">Password</label>
        <input className="w-full" type="password" id="userPass" />
        <p>We recommend you change your password regularly.</p>
        <label htmlFor="remember">
          <input type="checkbox" name="remember" id="remember" /> Remember my
          User ID
        </label>
        <button type="button">SIGN ON</button>
        <ul className="text-xs text-white">
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Forgot your Password ?</a>
          </li>
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Forgot your User ID</a>
          </li>
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Frequently Asked Questions</a>
          </li>
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
