import env from "@/env";
import { useWithdrawFunds } from "@/hooks/useWithdrawFunds";
import { CampaignStatus, useUserCampaigns } from "@/services/apis/core";
import { getStatusBadgeClass } from "@/utils/colors";
import { shortenTransactionHash } from "@/utils/transaction_string";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";

const MyCampaignTab: React.FC = () => {
  const {
    data: userCampaigns,
    isLoading: isCampaignsLoading,
    error: errorCampaignsLoading,
  } = useUserCampaigns();

  const [currentCampaignId, setCurrentCampaignId] = useState<number>(0);
  const { withdrawFunds, error, loading, success, transactionHash } =
    useWithdrawFunds();

  const handleWithdrawFunds = (campaignId: number) => {
    setCurrentCampaignId(campaignId);
    withdrawFunds(env.CONTRACT_ID, campaignId);
  };

  if (isCampaignsLoading) {
    return <div className="text-center py-8">Loading campaigns...</div>;
  }

  if (errorCampaignsLoading) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading campaigns.
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
        My Campaigns
      </h2>
      {userCampaigns && userCampaigns.length > 0 ? (
        <div className="space-y-4">
          {userCampaigns.map((campaign) => (
            <div
              key={Number(campaign?.onchain_id)}
              className="p-6 border rounded-lg shadow-lg bg-gray-50 hover:bg-white transition ease-in-out duration-300"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={campaign?.image || "https://via.placeholder.com/150"}
                  alt={campaign.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-blue-700">
                      {campaign.title}
                    </h3>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(
                        campaign?.status || ""
                      )}`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                  <p className="text-gray-600 font-semibold mt-2">
                    Goal: {campaign.current_amount} / {campaign.goal}{" "}
                    {campaign?.token?.symbol || "Unknown"}
                  </p>
                  <div className="w-full bg-gray-200 h-3 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-red-600 h-3 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {campaign.progress}% funded
                  </p>
                  <div className="flex mt-3">
                    <nav className="text-yellow-600 mt-3 mr-10">
                      Created at:{" "}
                      {campaign.created_at
                        ? `${formatDistanceToNow(
                            new Date(campaign.created_at),
                            {
                              addSuffix: true,
                            }
                          )}`
                        : "Unknown time ago"}
                    </nav>
                    <nav className="text-yellow-600 mt-3 ">
                      Updated at:{" "}
                      {campaign.updated_at
                        ? `${formatDistanceToNow(
                            new Date(campaign.updated_at),
                            {
                              addSuffix: true,
                            }
                          )}`
                        : "Unknown time ago"}
                    </nav>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleWithdrawFunds(Number(campaign?.onchain_id))
                  }
                  className={`py-2 px-4 rounded-full text-white transition-all duration-300 ${
                    loading || campaign.status === CampaignStatus.CLOSED
                      ? "bg-yellow-400 cursor-not-allowed"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
                  disabled={
                    loading || campaign.status === CampaignStatus.CLOSED
                  }
                >
                  {loading && Number(campaign?.onchain_id) === currentCampaignId
                    ? "Processing..."
                    : "Withdraw Funds"}
                </button>
              </div>
              {success &&
                transactionHash &&
                Number(campaign?.onchain_id) === currentCampaignId && (
                  <nav>
                    {" "}
                    <a
                      className="text-green-600 hover:underline"
                      href={`${env.EXPLORER_SCAN}/transaction/${transactionHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Withdrawal successful! Transaction Hash:{" "}
                      {shortenTransactionHash(transactionHash)}
                    </a>
                  </nav>
                )}
              {error && (
                <p className="text-red-500 mt-2 text-sm">Error: {error}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">No campaigns found.</div>
      )}
    </div>
  );
};

export default MyCampaignTab;
