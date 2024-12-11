import { mockData } from "@/mock/mockData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ITEMS_PER_PAGE = 12;

const useCatalog = () => {
  const [page, setPage] = useState(1);

  const { data, ...queryInfo } = useQuery({
    queryKey: ["home", page],
    queryFn: async () => {
      const allData = mockData.items;
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const paginatedData = allData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
      );
      return {
        paginatedData,
        totalPages: Math.ceil(allData.length / ITEMS_PER_PAGE),
      };
    },
  });

  return {
    data: data?.paginatedData,
    totalPages: data?.totalPages || 0,
    page,
    setPage,
    ...queryInfo,
  };
};

export default useCatalog;
