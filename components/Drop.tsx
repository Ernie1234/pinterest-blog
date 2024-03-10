"use client";

import { useRouter } from "next/navigation";

import { Button } from ".";

function Drop() {
  const router = useRouter();
  return (
    <div className="py-5 md:py-16 lg:py-28 flex justify-center items-center flex-col mx-auto">
      <h2 className="pb-3 w-full text-center font-medium text-2xl md:text-4xl lg:text-6xl">
        Drop us a line
      </h2>
      <p className="text-xl pb-12">
        Ready to collab on a story? Our press team wants to hear from you. (No,
        really.)
      </p>
      <Button
        title="Contact"
        handleClick={() => router.push("/contact")}
        large
        isOutlined
      />
    </div>
  );
}

export default Drop;
