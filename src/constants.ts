import rewardingABI from "../contracts/rewarding.json";

export const REWARDING_CONTRACT = {
  address: "0x06C852462AFB83c2e5C11e51556c1CEDc0a8b1E0",
  abi: rewardingABI,
};

export const AVVALER = {
  id: 0,
  name: "Avvaler",
  description: "Welcome on board!",
};

export const TRAILBLAZER = {
  id: 1,
  name: "Trailblazer",
  description: "The first to arrive!",
};

export interface Achievement {
  id: number;
  name: string;
  description: string;
}
