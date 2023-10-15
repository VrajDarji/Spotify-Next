const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid h-full w-full s-grid p-2 gap-2">{children}</div>;
};
export default Container;
