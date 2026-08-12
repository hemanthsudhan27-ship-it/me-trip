"use client";

import React, { createContext, useContext, useState } from "react";
import { Package } from "@/data/packages";

interface UIModalContextType {
  enquiry: {
    isOpen: boolean;
    packageName: string | null;
    open: (packageName?: string) => void;
    close: () => void;
  };
  quickView: {
    isOpen: boolean;
    packageData: Package | null;
    open: (pkg: Package) => void;
    close: () => void;
  };
}

const UIModalContext = createContext<UIModalContextType>({
  enquiry: {
    isOpen: false,
    packageName: null,
    open: () => {},
    close: () => {},
  },
  quickView: {
    isOpen: false,
    packageData: null,
    open: () => {},
    close: () => {},
  },
});

export function UIModalProvider({ children }: { children: React.ReactNode }) {
  // Enquiry Modal State
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryPackageName, setEnquiryPackageName] = useState<string | null>(null);

  // Quick View Modal State
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewPackage, setQuickViewPackage] = useState<Package | null>(null);

  const openEnquiry = (packageName?: string) => {
    setEnquiryPackageName(packageName || null);
    setEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setEnquiryOpen(false);
    setEnquiryPackageName(null);
  };

  const openQuickView = (pkg: Package) => {
    setQuickViewPackage(pkg);
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
    setQuickViewPackage(null);
  };

  const value = {
    enquiry: {
      isOpen: enquiryOpen,
      packageName: enquiryPackageName,
      open: openEnquiry,
      close: closeEnquiry,
    },
    quickView: {
      isOpen: quickViewOpen,
      packageData: quickViewPackage,
      open: openQuickView,
      close: closeQuickView,
    },
  };

  return (
    <UIModalContext.Provider value={value}>
      {children}
    </UIModalContext.Provider>
  );
}

export const useUIModals = () => useContext(UIModalContext);
