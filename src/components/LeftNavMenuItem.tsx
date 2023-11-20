type propsType = {
  text: string;
  icon: React.ReactElement;
  className: string;
  action: () => void;
};

const LeftNavMenuItem = ({ text, icon, className, action }: propsType) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer flex h-10 items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};
export default LeftNavMenuItem;
