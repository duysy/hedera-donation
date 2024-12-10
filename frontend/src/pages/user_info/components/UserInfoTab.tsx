import { useUploadFile } from "@/services/apis/auth";
import { useUpdateUser, useUserInfo } from "@/services/apis/core"; // Add useUploadFile hook
import React, { useEffect, useState } from "react";

const UserInfoTab: React.FC = () => {
  const { data: userInfo, isLoading: isUserLoading } = useUserInfo();
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: uploadFile, isSuccess: isSuccessUploadAvatar } =
    useUploadFile();

  const [formData, setFormData] = useState({
    userImage: "",
    name: "",
    walletAddress: "",
    facebook: "",
    twitter: "",
    bio: "",
  });

  useEffect(() => {
    if (userInfo) {
      setFormData({
        userImage: userInfo.user_image || "https://placehold.co/150x150",
        name: userInfo.name,
        walletAddress: userInfo.wallet_address,
        facebook: userInfo.facebook || "",
        twitter: userInfo.twitter || "",
        bio: userInfo.bio || "",
      });
    }
  }, [userInfo]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const uploadData = new FormData(); // Rename to avoid conflicts
      uploadData.append("file", file);

      uploadFile(uploadData, {
        onSuccess: (data) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            userImage: `${data.file_url}`,
          }));
        },
        onError: (error: any) => {
          alert(`Error uploading avatar: ${error.message}`);
        },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const snakeUser = {
      name: formData.name,
      bio: formData.bio,
      facebook: formData.facebook,
      twitter: formData.twitter,
      user_image: formData.userImage,
    };
    updateUser(snakeUser, {
      onSuccess: () => {
        alert("User information updated successfully!");
      },
      onError: (error: any) => {
        alert(`Error updating user info: ${error.message}`);
      },
    });
  };

  if (isUserLoading) {
    return <div className="text-center py-8">Loading user info...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
        Hi, {formData.name}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 text-center">
          <img
            src={formData.userImage}
            alt="User Icon"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {isSuccessUploadAvatar && (
            <p className="text-green-500 mt-2">Image uploaded successfully!</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800">
            Wallet Address
          </label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            readOnly
            className="w-full mt-2 px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800">
            Facebook URL
          </label>
          <input
            type="url"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
            placeholder="Enter your Facebook profile URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800">
            Twitter URL
          </label>
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleInputChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
            placeholder="Enter your Twitter profile URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
            rows={4}
            placeholder="Write a short bio about yourself"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoTab;
