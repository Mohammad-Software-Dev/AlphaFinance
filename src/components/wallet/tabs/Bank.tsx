import React, { useState } from "react";
import { Button } from "../../common/Button";
import TextInput from "../../common/TextInput";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import MasterCardLogo from "../../../assets/icons/master_card_logo.svg?react";
import VisaCardLogo from "../../../assets/icons/visa_card_logo.svg?react";
import CreditCard from "../../profile/CreditCard";
import InfoIcon from "../../../assets/icons/info-icon.svg?react";
import Lottie from "lottie-react";
import checkCircle from "../../../assets/animations/check-circle_1.json";
import Modal from "../../common/Modal";

const cardImages = [
  { logo: <MasterCardLogo className="w-14 h-14" />, label: "Master Card" },
  { logo: <VisaCardLogo className="w-14 h-14" />, label: "Visa Card" },
];

const Bank: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    phone: "",
    amount: "200",
    walletNumber: "",
    fee: "28",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStatus(null);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setForm({ phone: "", amount: "200", walletNumber: "", fee: "28" });
    setStatus("Transfer draft reset.");
  };

  const handleContinue = () => {
    const amountValue = Number(form.amount.replace(/[^\d.]/g, ""));
    if (!form.walletNumber.trim() || Number.isNaN(amountValue) || amountValue <= 0) {
      setStatus("Enter a valid wallet number and amount.");
      return;
    }
    if (amountValue > 5000) {
      setStatus("Transfer limit reached in demo mode (max 5,000).");
      return;
    }
    setShowModal(true);
    setStatus(null);
  };

  return (
    <div className="flex-1 lg:w-2/5">
      <h4 className="font-medium md:font-normal mb-2">Withdrew</h4>
      <div className="space-y-1">
        <label className="block text-dim-gray text-sm md:text-base mb-1 py-1">
          Choose account/ card
        </label>
        <div className="flex  flex-col lg:flex-row w-full   gap-8 items-stretch mb-8">
          <div className=" px-6 py-2  md:w-sm lg:w-md">
            <Swiper
              effect="cards"
              modules={[EffectCards]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {cardImages.map((card, idx) => (
                <SwiperSlide key={idx}>
                  <CreditCard logo={card.logo} label={card.label} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <TextInput
          id="phone"
          name="phone"
          label="Phone Number"
          placeholder="Optional"
          value={form.phone}
          onChange={handleChange}
        />
        <TextInput
          id="amount"
          name="amount"
          label="Choose amount"
          placeholder="$200"
          value={form.amount}
          onChange={handleChange}
        />
        <TextInput
          id="wallet-number"
          name="walletNumber"
          label="Wallet number"
          placeholder="02b...bd9@lua...qid.onion:9735"
          value={form.walletNumber}
          onChange={handleChange}
        />
        <TextInput
          id="fee"
          name="fee"
          label="Fee"
          placeholder="$28"
          value={form.fee}
          onChange={handleChange}
          rightIcon={<InfoIcon />}
        />
        {status && <p className="text-sm text-brand mt-2">{status}</p>}
        <div className="flex justify-end mt-2 gap-3">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col items-center max-w-lg w-full mx-2 p-8">
          <div>
            <Lottie
              animationData={checkCircle}
              autoplay
              loop={false}
              style={{ width: 150, height: 150 }}
            />
          </div>
          <h4 className="text-center mb-2">
            Congratulations!!
            <br /> You successfully transferred
            <br />${form.amount}
          </h4>
          <p className="text-dark-silver text-base md:text-lg text-center mb-6">
            For additional information
            <br />
            please contact our customer support
          </p>
          <Button width="w-1/2" onClick={() => setShowModal(false)}>
            Back to Wallet
            <span className="ml-2">→</span>
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Bank;
