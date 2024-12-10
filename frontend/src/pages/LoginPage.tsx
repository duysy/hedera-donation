import { UrlMapping } from "@/commons/url-mapping.common";
import { useHashConnectContext } from "@/contexts/hashconnect";
import { useLogin } from "@/services/apis/auth";
import { useAuthStore } from "@/services/stores/useAuthStore";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { mutate: loginMutate, isPending: isLoggingIn } = useLogin();
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { connectToWallet, walletAddress } = useHashConnectContext();
  const handleLogin = () => {
    if (!walletAddress) {
      alert("Please connect your wallet first.");
      return;
    }

    loginMutate(
      { wallet_address: walletAddress },
      {
        onSuccess: async (data) => {
          try {
            login(data);
            navigate(UrlMapping.home);
          } catch (error) {
            alert("Error setting authentication.");
          }
        },
        onError: (error: any) => {
          alert(
            `Login failed: ${error.response?.data?.message || error.message}`
          );
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-gray-50 to-blue-50">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
          Welcome Back!
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Connect your HashPack Wallet to log in.
        </p>
        <button
          onClick={connectToWallet}
          className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md ${
            walletAddress
              ? "bg-green-600 hover:bg-green-700"
              : "hover:bg-blue-700"
          } transition duration-300 mb-4`}
        >
          {walletAddress
            ? `Connected: ${walletAddress}`
            : "Connect HashPack Wallet"}
        </button>
        {walletAddress && (
          <button
            onClick={handleLogin}
            className={`w-full bg-yellow-500 text-blue-800 py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300 ${
              isLoggingIn && "opacity-70 cursor-not-allowed"
            }`}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        )}
        <div className="mt-4 text-center">
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate(UrlMapping.home)}
          >
            Back to home page
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
