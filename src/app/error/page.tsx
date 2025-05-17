"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ErrorMessage = () => {
  const searchParams = useSearchParams();

  const message = searchParams.get("message") ?? "An unknown error occurred";

  return <div>{message}</div>;
};

const Error = () => (
  <Suspense>
    <ErrorMessage />
  </Suspense>
);

export default Error;
