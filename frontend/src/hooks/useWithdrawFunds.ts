import { useHashConnectContext } from "@/contexts/hashconnect";
import {
  AccountId,
  ContractExecuteTransaction,
  ContractFunctionParameters,
  Signer,
} from "@hashgraph/sdk";
import { useState } from "react";

interface UseWithdrawFundsResult {
  withdrawFunds: (
    contractId: string,
    campaignId: number,
    gasLimit?: number
  ) => void;
  error: string | null;
  loading: boolean;
  success: boolean;
  transactionHash: string | null;
}

export const useWithdrawFunds = (): UseWithdrawFundsResult => {
  const { walletAddress, hashconnect } = useHashConnectContext();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const withdrawFunds = async (
    contractId: string,
    campaignId: number,
    gasLimit: number = 15_000_000
  ) => {
    if (!walletAddress) {
      setError("Wallet is not connected.");
      return null;
    }

    setError(null);
    setLoading(true);
    setSuccess(false);
    setTransactionHash(null);

    try {
      const signer = hashconnect?.getSigner(
        AccountId.fromString(walletAddress) as any
      ) as unknown as Signer;

      const transaction = await new ContractExecuteTransaction()
        .setContractId(contractId)
        .setGas(gasLimit)
        .setFunction(
          "withdrawFunds",
          new ContractFunctionParameters().addUint256(campaignId)
        )
        .freezeWithSigner(signer);

      const contractExecSubmit = await transaction.executeWithSigner(signer);
      const hash = contractExecSubmit.transactionId.toString();
      setTransactionHash(hash);
      setSuccess(true);
    } catch (err) {
      console.error("Failed to withdraw funds:", err);
      const errorMessage =
        (err as Error)?.message || "An unexpected error occurred.";
      setError(`Failed to process withdrawal: ${errorMessage}`);
      setSuccess(false);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { withdrawFunds, error, loading, success, transactionHash };
};
