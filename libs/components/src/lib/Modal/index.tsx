import { useMounted } from "@facture/hooks";
import { createPortal } from "react-dom";
import { X } from "tabler-icons-react";

interface Props {
    title: string;
    onClose: () => void;
    children: any;
}

export function Modal({ title, onClose, children }: Props) {
    const mounted = useMounted();

    return mounted
        ? createPortal(
              <div className="modal fixed inset-0 bg-black bg-opacity-60 transition-opacity flex items-center justify-center">
                  <div className="bg-gray-100 p-6 rounded-md flex flex-col w-5/6 md:w-1/2 xl:w-1/3 space-y-7">
                      <div className="flex items-center justify-between text-gray-900 font-medium text-lg">
                          {title}
                          <span className="cursor-pointer" onClick={onClose}>
                              <X />
                          </span>
                      </div>
                      <div>{children}</div>
                  </div>
              </div>,
              document.querySelector("#modal") as Element
          )
        : null;
}
