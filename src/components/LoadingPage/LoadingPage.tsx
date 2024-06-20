import { IconMessageFilled } from "@tabler/icons-react";

export default function LoadingPage() {
  return (
    <div className="min-h-[100vh] min-w-[100vw] flex justify-center items-center bg-primary text-white">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-2 items-center justify-center">
          <IconMessageFilled size={40} />
          <p className="text-2xl tracking-widest">Doot</p>
        </div>
        <p>
          loading...
        </p>
      </div>
    </div>
  );
}
