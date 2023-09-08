const RootNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="py-7 shadow-md z-[999] fixed w-full  bg-white">
        <div className="w-nav mx-auto flex justify-between bg-white">
          <span className="text-xl font-bold text-neutral-800">
            Abdul.jabbar.dev
          </span>
          <div>Home</div>
        </div>
      </nav>
      {children}
    </>
  );
};
export default RootNav;
