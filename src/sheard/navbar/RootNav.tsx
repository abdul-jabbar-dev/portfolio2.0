const RootNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="py-5 shadow-md z-[999] fixed top-0 left-0 w-full bg-light">
        <div className="w-nav mx-auto flex justify-between bg-light">
          <span className="text-xl font-bold text-neutral-800">
            ABDUL.JABBAR
          </span>
          <div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
export default RootNav;
