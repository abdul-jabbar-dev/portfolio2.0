import Link from 'next/link';

const RootNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="py-5 shadow-sm z-[999] fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between px-6 sm:px-12 items-center">
          <Link href="/" className="text-xl font-bold text-slate-800 tracking-tight">
            ABDUL.JABBAR
          </Link>
          <div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
export default RootNav;
