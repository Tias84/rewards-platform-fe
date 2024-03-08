import Image from "next/image";

interface DisplayImageProps {
  tokenID: string | number;
  width?: number;
  height?: number;
}
const DisplayImage = (props: DisplayImageProps) => {
  const { tokenID, width, height } = props;
  const ACHIEVEMENTS_CID = process.env.NEXT_PUBLIC_ACHIEVEMENTS_CID;
  const GATEWAY_URL = process.env.NEXT_PUBLIC_PINATA_GATEWAY;
  const URL = `${GATEWAY_URL}/${ACHIEVEMENTS_CID}/${tokenID}.jpg?pinataGatewayToken=${process.env.NEXT_PUBLIC_PINATA_GATEWAY_KEY}`;

  return (
    <Image
      src={URL}
      width={width || 300}
      height={height || 500}
      alt="Immagine"
    />
  );
};

export default DisplayImage;
