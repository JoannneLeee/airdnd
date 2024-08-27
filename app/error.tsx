"use client";

import EmptyState from "@/components/EmptyState";
import React, { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const Error = ({ error }: ErrorStateProps) => {

  useEffect(() => {
    console.error(error);
  }, []);
  
  return <EmptyState title="Uhh Ohh" subtitle="Something went wrong..." />;
};

export default Error;
