import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { Queries } from "../utils";
import { AssetService } from "../services";
import { handleFreshList } from "../redux/crypto";

export const useGetAssets = () => {
  const dispatch = useDispatch();

  const { data, error, isFetching, isLoading, isError, isSuccess, refetch } =
    useQuery({
      queryKey: [Queries.GET_ASSETS],
      queryFn: () => AssetService.getAssets(),
      retry: false,
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    if (data && data.data) {
      dispatch(handleFreshList(data.data));
    }
  }, [data]);

  return {
    data,
    error,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
