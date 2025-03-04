import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  filterTag: string | null;
  setFilterTag: (tag: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const value = {
    filterTag,
    setFilterTag,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}
