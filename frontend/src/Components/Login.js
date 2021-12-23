/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RedirectToDiscord, RedirectToGoogle } from "../api/apiCalls";

const Login = (props) => {
  const [open, setOpen] = [props.showLogin , props.setshowLogin];


  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block overflow-hidden text-center align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
              <div className="px-4 pt-5 pb-4 bg-[#0e063d] sm:p-6 sm:pb-4 ">
                <div className="flex justify-center sm:flex sm:items-center">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-extrabold leading-6 text-center text-white"
                    >
                      Login
                    </Dialog.Title>
                    <div className="flex justify-center mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="justify-center px-4 py-3 text-white transition-all bg-gray-50 sm:px-6 sm:flex sm:flex-row">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base    border border-gray-300 rounded-md shadow-sm hover:bg-gray-50   sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm bg-[#EA4335] hover:text-[#EA4335] transition-all  font-bold outline-none focus:outline-none"
                  onClick={() => {
                    RedirectToGoogle();
                    setOpen(false);
                  }}
                  ref={cancelButtonRef}
                >
                  Google
                </button>{" "}
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base   border border-gray-300 rounded-md shadow-sm hover:bg-gray-50   sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm bg-[#5865F2] hover:text-[#5865F2] transition-all  font-bold outline-none"
                  onClick={() => {
                    RedirectToDiscord();
                    setOpen(false);
                  }}
                  ref={cancelButtonRef}
                >
                  Discord
                </button>{" "}
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base    border border-gray-300 rounded-md shadow-sm hover:bg-gray-50   sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm bg-[#1877F2] hover:text-[#1877F2] transition-all  font-bold outline-none"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Facebook
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Login;
