const RootNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="py-7  shadow-md z-[999] fixed w-full bg-light">
        <div className="w-nav mx-auto flex justify-between bg-light">
          <span className="text-xl font-bold text-neutral-800">
            Abdul.jabbar.dev
          </span>
          <div> </div>
        </div>
      </nav>
      {children}
    </>
  );
};
export default RootNav;
