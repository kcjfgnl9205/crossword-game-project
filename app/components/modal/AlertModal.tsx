'use client';


import { useCallback, useEffect, useState } from "react";
import { Button } from "@/app/components/htmlTag";


export type AlertProps = {
  isOpen: boolean;
  onClose: () => void
  title: string;
  onSubmit: () => void
  onSubmitLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  primary?: boolean;
  error?: boolean;
}

export default function AlertModal({
  isOpen,
  onClose,
  title,
  onSubmit,
  onSubmitLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  primary,
  error
}: AlertProps) {
  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    
    onSubmit();
    onClose();
  }, [disabled, onSubmit, onClose]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    } 

    secondaryAction();
    onClose();
  }, [disabled, secondaryAction, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
            relative
            w-full
            md:w-1/5
            my-6
            mx-auto
            lg:h-auto
            md:h-auto
          "
        >
          {/* content */}
          <div
            className={`
              translate
              duration-300
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-white
                outline-none
                focus:outline-none
              "
            >
              {/* header */}
              <div
                className="
                  flex
                  items-center
                  pt-10
                  pb-6
                  px-2
                  rounded-t
                  justify-center
                  relative
                "
              >
                <div className="text-lg font-semibold">
                  {title.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}
                </div>
              </div>

              <div className="flex md:p-6">
                <div
                  className='
                    flex
                    flex-row
                    items-conter
                    md:gap-4
                    w-full
                  '
                > 
                  {
                    secondaryAction && secondaryActionLabel && 
                    <Button disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction} />
                  }
                  <Button disabled={disabled} label={onSubmitLabel} onClick={handleSubmit} error={error} primary={!(secondaryAction && secondaryActionLabel) ? true : primary} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

