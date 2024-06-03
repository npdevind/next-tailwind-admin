import Image from "next/image";
import notFoundImage from "../assets/not_found.svg";

export default function Custom404() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <Image src={notFoundImage} alt="404" />
      </div>
    </>
  );
}
