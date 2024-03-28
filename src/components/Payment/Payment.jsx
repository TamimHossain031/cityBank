import { useNavigate } from "react-router-dom";

export default function Payment() {
    const history = useNavigate();
  return (
    <section className="grid text-center p-9 text-[rgba(46,67,105,.75)]">
      <button className="text-2xl font-semibold py-16" >Send to a recipient</button>

      <div className="bg-white ">
        <h1 className="text-2xl font-semibold pt-5">
          Who do you want to pay ?
        </h1>
        <input
          className="border w-2/4 p-2 mt-4"
          type="text"
          placeholder="Email / account number/ IBAN / name"
        />
        <p className="text-xs mt-3">
          Enter the account email to add as the recipient instantly.{" "}
        </p>
        <div className="flex flex-col justify-between min-h-[400px] pb-5">
          <div className="flex justify-between w-[50%] mx-auto mt-10">
            <h3 className="text-xs">Recently Sent</h3>
            <p className="text-xs text-sky-500">All my recipients</p>
          </div>
          <button type="button" className="border px-16 py-3 w-2/4 rounded-full mx-auto">
            TO NEW RECIPIENT
          </button>
        </div>
      </div>
    </section>
  );
}
