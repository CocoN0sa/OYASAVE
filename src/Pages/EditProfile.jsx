import React from "react";
import { ArrowLeft, Camera, Check, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const EditProfile = () => {
  const navigate = useNavigate();
  const [photoOptionsOpened, { open: openPhotoOptions, close: closePhotoOptions }] =
    useDisclosure(false);
  const [saveModalOpened, { open: openSaveModal, close: closeSaveModal }] =
    useDisclosure(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    openSaveModal();
  };

  return (
    <div className="min-h-screen bg-[#eef8f8] px-1">
      <div className="container min-h-screen w-full max-w-md bg-white mx-auto px-4 pt-5 pb-12 shadow-[0_10px_40px_rgba(71,109,119,0.08)]">
        <button type="button" onClick={() => navigate("/MyProfile")}>
          <p className="text-4xl text-[#44A1A0]">←</p>
        </button>

        <h1 className="mb-7 mt-7 text-[28px] font-bold leading-tight text-[#3c4654]">
          Edit Profile
        </h1>

        <div className="mb-10 flex flex-col items-center">
          <div className="relative mb-4 flex h-[139px] w-[139px] items-center justify-center rounded-full bg-[#d9d9d9] text-[#d9d9d9]">
            <CircleUserRound size={78} strokeWidth={1.3} />
            <button
              type="button"
              onClick={openPhotoOptions}
              aria-label="Change profile photo"
              className="absolute bottom-2 right-2 flex h-[31px] w-[31px] items-center justify-center rounded-full border-2 border-white bg-[#49a9af] text-white"
            >
              <Camera size={12} strokeWidth={2.2} />
            </button>
          </div>
          <p className="text-[28px] font-bold text-[#3d4755]">John Doe</p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div >
            <label
              htmlFor="username"
              className="mb-1 block text-[16px] font-medium text-[#393F4A]"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="johnyr9x"
              className="h-12 w-full rounded-[12px] border border-[#D0D5DD] px-4 text-sm text-[#6d7682] outline-none placeholder:text-[#98A2B3]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-[16px] font-medium text-[#393F4A]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ayomidejohn@gmail.com"
              className="h-12 w-full rounded-[12px] border border-[#D0D5DD] px-4 text-sm text-[#6d7682] outline-none placeholder:text-[#98A2B3 placeholder:text-[16px]"
            />
          </div>

          <button
            type="submit"
            className="mt-5 h-12 w-full rounded-[10px] bg-[#49a9af] text-[16px] font-medium text-white shadow-[0_10px_24px_rgba(73,169,175,0.2)]"
          >
            Save Changes
          </button>
        </form>

        <Modal
          opened={photoOptionsOpened}
          onClose={closePhotoOptions}
          withCloseButton={false}
          closeOnClickOutside
          closeOnEscape
          size="100%"
          padding={0}
          transitionProps={{ transition: "slide-up", duration: 220 }}
          overlayProps={{
            backgroundOpacity: 0.2,
            blur: 0,
            style: { bottom: "75px" },
          }}
          classNames={{
            inner: "!left-0 !right-0 !items-end !px-0",
            content:
              "!mt-auto !mb-[31px] !w-screen !max-w-[100vw] !rounded-t-[40px] !rounded-b-none !shadow-[0_-10px_30px_rgba(0,0,0,0.08)]",
            body: "!p-0",
            header: "!hidden",
          }}
        >
          <div className="px-5 pb-7 pt-3">
            <div className="mx-auto mb-8 h-1.5 w-14 rounded-full bg-[#9EA5B3]" />
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={closePhotoOptions}
                className="flex h-[48px] w-[342px] items-center justify-center rounded-[10px] bg-[#4CA6A6] text-[16px] font-medium text-white"
              >
                Select from Album
              </button>
              <button
                type="button"
                onClick={closePhotoOptions}
                className="relative flex h-[48px] w-[342px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#D9DEE7] bg-white text-[#A6AEBB]"
              >
                <span className="text-[16px] font-medium">Take a photo</span>
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          opened={saveModalOpened}
          onClose={closeSaveModal}
          centered
          withCloseButton={false}
          closeOnClickOutside
          closeOnEscape
          size={345}
          padding={0}
          overlayProps={{ backgroundOpacity: 0.2, blur: 0 }}
          classNames={{
            content: "!rounded-[6px] !shadow-[0_10px_24px_rgba(0,0,0,0.14)]",
            body: "!p-0",
            header: "!hidden",
          }}
        >
          <div className="px-7 pb-8 pt-8 text-center">
            <div className="mx-auto mb-5 flex h-[66.67px] w-[66.67px] items-center justify-center rounded-full bg-[#49a9af] text-white">
              <Check size={26.67} strokeWidth={2.5} />
            </div>
            <p className="text-[28px] font-bold leading-none text-[#3f4653]">
              Changes Saved
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EditProfile;
