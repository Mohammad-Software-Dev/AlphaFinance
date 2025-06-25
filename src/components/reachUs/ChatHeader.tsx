interface ChatHeaderProps {
  userImage: string | undefined;
  userName: string | null;
  userPosition: string | null;
  onBack: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  userImage,
  onBack,
  userName,
  userPosition,
}) => {
  return (
    <div className="flex items-center border-b-[1px] pb-1 border-light-silver">
      <div className="flex flex-row items-center justify-center ">
        <button onClick={onBack} className="lg:hidden text-brand text-lg mr-3">
          ❮
        </button>
        <img
          src={userImage}
          alt="David Peters"
          className="w-12 h-12 rounded-full object-cover bg-profile-blue"
        />
      </div>

      <div className="ml-3">
        <div className="text-brand text-sm md:text-base lg:text-lg font-semibold">
          {userName}
        </div>
        <div className="text-xs">{userPosition}</div>
      </div>
    </div>
  );
};

export default ChatHeader;
