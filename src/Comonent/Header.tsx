const Headers = () => {
  return (
    <header className="container mx-auto flex items-center justify-between gap-10 py-10">
      {/* Left Content */}
      <div>
        <h2 className="text-5xl font-bold">
          Build Your Ideal
        </h2>

        <h2 className="mb-3 bg-linear-to-r from-orange-500 to-indigo-700 bg-clip-text text-5xl font-bold text-transparent">
          Development Stack
        </h2>

        <p className="mb-10 text-slate-600">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          <br />
          next project.
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full bg-linear-to-r from-orange-500 to-pink-500 px-5 py-2 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
          >
            Explore Technologies
          </button>

          <button
            type="button"
            className="rounded-full border border-gray-300 px-5 py-2 font-semibold text-black shadow-lg transition duration-300 hover:scale-105"
          >
            View Stack
          </button>
        </div>
      </div>

      {/* Banner Image */}
      <div>
        <img
          src="/banner-stack.png"
          alt="Development Stack"
          className="w-full max-w-md"
        />
      </div>
    </header>
  );
};

export default Headers;