import { useReadContract, useWriteContract } from "wagmi";
import { Achievement, REWARDING_CONTRACT } from "@/constants";
import { useEffect, useState } from "react";
import { config } from "../../config";

interface AchievementManagementProps {
  token: Achievement;
  userAddress: string | `0x${string}`;
}

const AchievementManagement = (props: AchievementManagementProps) => {
  const { token, userAddress } = props;
  const { writeContract } = useWriteContract({ config });
  const [amountToMint, setAmountToMint] = useState(0);
  const [totalSupply, setTotalSupply] = useState("0");

  const totalSupplyRead = useReadContract({
    address: REWARDING_CONTRACT.address as `0x${string}`,
    abi: REWARDING_CONTRACT.abi,
    functionName: "totalSupply",
    args: [token.id],
  });

  function mint() {
    if (amountToMint === 0) {
      alert("You can't mint 0 tokens");
      return;
    }

    writeContract({
      address: REWARDING_CONTRACT.address as `0x${string}`,
      abi: REWARDING_CONTRACT.abi,
      functionName: "mint",
      args: [userAddress, token.id, amountToMint, "0x00"],
    });
  }

  useEffect(() => {
    if (totalSupplyRead.data) {
      setTotalSupply(totalSupplyRead.data.toString());
    }
  }, [totalSupplyRead.data]);

  return (
    <div className="flex mt-10 w-full space-y-4">
      <div className="flex flex-col border-2 border-black p-4 w-full space-y-6">
        <div>
          <p>Achievement name</p>
          <p className="font-semibold">{token.name}</p>
        </div>

        <div>
          <p>Achievement description</p>
          <p className="font-semibold">{token.description}</p>
        </div>

        <div>
          <p>Achievement supply</p>
          <p className="font-semibold">{totalSupply}</p>
        </div>

        <div>
          <p>Achievement unique owners</p>
          <p className="font-semibold">0</p>
        </div>

        <div>
          <p>Achievement whitelist</p>
          <div className="flex flex-col space-y-2">
            <p className="font-semibold">0x1234</p>
            <p className="font-semibold">0x5678</p>
            <p className="font-semibold">0x90ab</p>
          </div>

          <div className="flex space-x-2">
            <input
              placeholder="0x06C852462AFB83c2e5C11e51556c1CEDc0a8b1E0"
              className="border-black border-2 w-2/3"
            />
            <button className="bg-[#47a1ff] text-white p-2">
              Add to whitelist
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <p>Mint a new supply of token</p>
          <div className="flex space-x-2">
            <input
              value={amountToMint}
              onChange={(e) => setAmountToMint(e.target.valueAsNumber)}
              type="number"
              placeholder="100"
              className="border-black border-2"
            />
            <button onClick={mint} className="bg-[#47a1ff] text-white p-2">
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementManagement;
