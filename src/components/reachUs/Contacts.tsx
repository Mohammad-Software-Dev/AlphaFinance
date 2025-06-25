import PhoneIcon from "../../assets/icons/chat_phone.svg?react";
import MailIcon from "../../assets/icons/chat_mail.svg?react";
import User1 from "../../assets/images/male.png";
import User2 from "../../assets/images/female.png";

const contacts = [
  {
    avatar: User1,
    bg_color: "bg-profile-blue",
    name: "Mr.David Peters",
    title: "Account Manager",
    info: (
      <>
        <div className="text-xs text-dark-silver w-3/4">
          Note: I am available everyday from 10:30 AM to 5:40 PM
        </div>
        <div className="text-xs flex flex-row gap-2 justify-start items-center mt-1">
          <PhoneIcon className="w-3 h-3" />
          <span className="text-xs text-dark-silver">Tel: +20 398 5427</span>
        </div>
        <div className="text-xs flex flex-row gap-2 justify-start items-center mt-1">
          <MailIcon className="w-3 h-3" />
          <span className="text-xs text-dark-silver">
            Email: info@newzop.pro
          </span>
        </div>
      </>
    ),
    active: true,
    time: "",
    message: "",
  },
  {
    avatar: User2,
    bg_color: "bg-profile-pink",
    name: "Support Agent Lisa Roy",
    title: "",
    info: (
      <div className="text-xs text-dark-silver w-3/4">
        Hi, are you! I’m Lisa how can I help you?
      </div>
    ),
    active: false,
    time: "10:35 AM",
    message: "",
  },
];

interface ContactsProps {
  activeIndex: number | null;
  onContactClick: (index: number) => void;
}

const Contacts: React.FC<ContactsProps> = ({ activeIndex, onContactClick }) => {
  return (
    <aside className="w-full flex  flex-col gap-5 bg-ghost-white h-fit py-3 px-5 md:py-4 md:px-6 rounded-lg lg:w-1/4 ">
      {contacts.map((c, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition ${
            activeIndex === i ? "bg-white shadow" : ""
          }`}
          onClick={() => onContactClick(i)}
        >
          <img
            src={c.avatar}
            alt={c.name}
            className={`w-13 h-13 rounded-full object-cover ${c.bg_color}`}
          />
          <div>
            <div className="font-semibold flex flex-row w-full justify-between items-center lg:items-start leading-tight">
              <span className="text-brand text-sm md:text-base w-3/4 lg:text-lg">
                {c.name}
              </span>
              <span className="text-dark-silver flex-1 w-fit text-xs md:text-sm lg:pt-1 lg:text-sm">
                {c.time}
              </span>
            </div>
            <div className="text-xs font-semibold mb-1">{c.title}</div>
            <div>{c.info}</div>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Contacts;
