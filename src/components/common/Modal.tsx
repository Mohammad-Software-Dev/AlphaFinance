import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const ANIMATION_DURATION = 0.3;

const defaultVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
  exit: { y: 50, opacity: 0, transition: { duration: ANIMATION_DURATION } },
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className = "",
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);
  const [persistedChildren, setPersistedChildren] = useState(children);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setPersistedChildren(children);
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
      const timeout = setTimeout(
        () => setMounted(false),
        ANIMATION_DURATION * 100
      );
      return () => clearTimeout(timeout);
    }
  }, [open, children]);

  useEffect(() => {
    if (!mounted) return;
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node))
        onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [mounted, onClose]);

  useEffect(() => {
    if (visible) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [visible]);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
            visible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          tabIndex={-1}
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <motion.div
            ref={modalRef}
            className={`relative bg-white rounded-sm  max-w-8xl w-fit p-6 ${className}`}
            variants={defaultVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ zIndex: 1 }}
          >
            <button
              className="absolute right-3 top-3 text-dark-silver hover:text-brand text-2xl font-bold"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
            {persistedChildren}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
