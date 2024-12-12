import { Data } from "@/models";
import axiosInstance from "@/utils/axiosInstance";

export async function getHome(): Promise<Data> {
  const res = await axiosInstance.get(
    "/cars/ASST-challenge-01JEVJTR90HVPSS2NRPPG02CJ3.json"
  );
  return res.data;
}
