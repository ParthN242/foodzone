import React from "react";
import { GoPerson } from "react-icons/go";
import { FiSmartphone } from "react-icons/fi";
import { MdCloudUpload } from "react-icons/md";
import { MdOutlineDataSaverOn } from "react-icons/md";
const Profile = () => {
  return (
    <div className="mt-4 w-full h-screen">
      <div className="max-w-5xl mx-auto rounded-lg border border-dotted border-gray-500 px-3 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-b-gray-300 bg-transparent py-2">
            <GoPerson className="text-xl text-gray-700" />
            <input
              type="text"
              placeholder="Enter full name"
              className="outline-none w-full bg-transparent"
            />
          </div>
          <div className="flex items-center gap-3 border-b border-b-gray-300 bg-transparent py-2">
            <FiSmartphone className="text-xl text-gray-700" />
            <input
              type="number"
              placeholder="Phone"
              className="outline-none w-full bg-transparent"
            />
          </div>
          <div className="w-full h-[360px] border border-dotted border-gray-400">
            <label
              htmlFor="file-upload"
              className="flex flex-col gap-4 items-center justify-center h-full"
            >
              <MdCloudUpload className="text-3xl text-gray-500 " />
              <p className="text-lg font-semibold text-gray-400">
                Click here to upload
              </p>
              <p className="text-xs text-gray-400">
                PNG, JPG or GIF (MAX. 800x400px)
              </p>
              <input
                type="file"
                name="file-upload"
                id="file-upload"
                accept="image/*"
                className="hidden"
                onChange={(e) => uploadImage(e)}
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button className="bg-orange-500 py-2 px-14 text-white text-lg flex items-center gap-3 rounded">
              Save <MdOutlineDataSaverOn />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
