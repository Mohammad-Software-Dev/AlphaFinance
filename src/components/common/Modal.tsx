import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
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
  title = "Dialog",
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();
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
    const node = modalRef.current;
    if (!node) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setTimeout(() => closeButtonRef.current?.focus(), 0);

    const getFocusable = () =>
      Array.from(
        node.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex=\"-1\"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));

    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (!active || active === first || !node.contains(active)) {
          e.preventDefault();
          last.focus();
        }
        return;
      }
      if (!active || active === last || !node.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node))
        onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("keydown", handleTab);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("keydown", handleTab);
      document.removeEventListener("mousedown", handleClick);
      previousFocusRef.current?.focus();
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
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          aria-modal="true"
          tabIndex={-1}
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <motion.div
            ref={modalRef}
            className={`relative ui-surface ui-text-primary rounded-sm max-w-8xl w-fit p-6 ${className}`}
            variants={defaultVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ zIndex: 1 }}
          >
            <h2 id={titleId} className="sr-only">
              {title}
            </h2>
            <div id={descriptionId}>
              {persistedChildren}
            </div>
            <button
              ref={closeButtonRef}
              className="absolute right-3 top-3 ui-text-muted hover:text-brand text-2xl font-bold focus-ring"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
