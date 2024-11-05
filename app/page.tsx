import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
      <video
        className=" mx-auto object-cover 
                   sm:w-[300px] sm:h-[180px] 
                   md:w-[75%] md:h-[60vh] 
                   lg:w-[80%] lg:h-[70vh] 
                   xl:w-[90%] xl:h-[80vh]"
        src="/sbb1.mp4"
        controls
      ></video>
    </div>
  );
}
