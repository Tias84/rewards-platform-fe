import React from "react";
import DisplayImage from "@/components/DisplayImage";
import { Achievement } from "@/constants";

interface CardProps {
  token: Achievement;
  isOwned?: boolean;
  isAuth?: boolean;
  isClaimable?: boolean;
}

const Card = (props: CardProps) => {
  const { token, isOwned, isAuth, isClaimable } = props;
  const width = "300px";

  return (
    <div className={`flex ${width} items-center flex-col`}>
      <h2 className="font-bold text-2xl">{token.name}</h2>
      <p className="text-lg">{token.description}</p>
      <DisplayImage tokenID={token.id} />

      {isAuth && (
        <div className="flex w-full justify-center mt-2 items-center space-x-4">
          {isOwned ? (
            <p>You already have it</p>
          ) : (
            isClaimable && (
              <>
                <button className="bg-[#47a1ff] text-white p-2">
                  Claim it!
                </button>
              </>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
