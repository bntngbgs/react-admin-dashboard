const UserForm = () => {
  return (
    <section className="px-4 md:px-8 mt-12 sm:mt-16">
      <h1 className="text-3xl text-center font-bold text-custom-blue-2">
        Add Users
      </h1>
      <form className="max-w-lg mx-auto mt-3 sm:mt-8">
        <label htmlFor="name" className="text-lg">
          <p className="mb-0.5 mt-3">Name :</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="user name..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="password" className="text-lg">
          <p className="mb-0.5 mt-3">Password :</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="email" className="text-lg">
          <p className="mb-0.5 mt-3">Email :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email address..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="phone" className="text-lg">
          <p className="mb-0.5 mt-3">Phone Number :</p>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="phone number..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="address" className="text-lg">
          <p className="mb-0.5 mt-3">Address :</p>
          {/* <input
            type="text"
            name="address"
            id="address"
            placeholder="address..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          /> */}

          <textarea
            name="address"
            id="address"
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
            rows={4}
            placeholder="address..."
          ></textarea>
        </label>
        <button
          type="submit"
          className="mt-6 py-2 rounded bg-custom-blue-2 font-semibold tracking-wide text-white-smoke w-full cursor-pointer"
        >
          Add users
        </button>
      </form>
    </section>
  );
};
export default UserForm;
