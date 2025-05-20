import { ProductProps } from "../../type";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild
} from "@headlessui/react";

interface Props {
  item: ProductProps;
}

const ProductCard = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div className="rounded-lg p-1 overflow-hidden duration-200 cursor-pointer">
      <div className="w-full h-60 relative group ">
        <img
          onClick={open}
          src={item?.images[0]}
          alt="productImage"
          className="w-full h-full rounded-lg object-cover group-hover:scale-[1.15] duration-300 scale-[1.08]"
        />
      </div>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-50 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 z-50">
              <TransitionChild
                enter="ease-in duration-300"
                enterFrom="opacity-0 transform-[scale(90%)]"
                enterTo="opacity-100 transform-[scale(100%)] "
                leave="ease-in duration-300 -translate-y-20"
                leaveFrom="opacity-100 transform-[scale(100%)] -translate-y-10"
                leaveTo="opacity-0 transform-[scale(90%)] -translate-y-10"
              >
                <DialogPanel className="w-full max-w-lg rounded-xl bg-black/50 backdrop-blur-2xl z-50 p-6">
                  <div>
                    <img
                      src={item?.images[0]}
                      alt="productImage"
                      className="w-full object-cover rounded-lg h-full"
                    />
                  </div>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;
