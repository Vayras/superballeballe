import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)] bg-white">
      <iframe
        className="w-full h-[80vh] max-w-4xl mx-auto" 
        src="/sbb1.mp4"
        frameBorder="0"
        allowFullScreen 
      ></iframe>
    </div>
  );
}
