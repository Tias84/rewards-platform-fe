"use client";
import { useAccount, useReadContract } from "wagmi";
import DisplayImage from "@/components/DisplayImage";

import { AVVALER, TRAILBLAZER } from "@/constants";
import Card from "@/components/Card";
import AchievementManagement from "@/components/AchievementManagement";

interface ConnectButtonProps {
  isConnected: boolean;
}

const ConnectButton = (props: ConnectButtonProps) => {
  const { isConnected } = props;
  const bgColor = isConnected ? "bg-black" : "bg-[#47a1ff]";

  return (
    <div className={`rounded-lg ${bgColor}`}>
      <w3m-button />
    </div>
  );
};

export default function Home() {
  const account = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="fixed top-0 w-full h-16 bg-white flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">Rewarding Platform</h1>

        <ConnectButton isConnected={account.isConnected} />
      </div>

      <div className="w-full flex justify-evenly">
        <Card isAuth={account.isConnected} token={AVVALER} />
        <Card isAuth={account.isConnected} token={TRAILBLAZER} />
      </div>

      {account.address && (
        <div className="mt-10 w-full space-y-4">
          <h1 className="font-bold text-2xl">Achievements management</h1>
          <AchievementManagement
            token={AVVALER}
            userAddress={account.address}
          />
          <AchievementManagement
            token={TRAILBLAZER}
            userAddress={account.address}
          />
        </div>
      )}
    </main>
  );
}
