const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='h-full flex items-center justify-center bg-radial from-sky-400 to-blue-800 from-sky-400 to-blue-800'>
    {children}
  </div>
);

export default AuthLayout;
