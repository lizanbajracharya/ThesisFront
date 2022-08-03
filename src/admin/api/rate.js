import { axiosInstance } from "../../axiosInterceptor";

export const getRates = async () => {
  const response = await axiosInstance.get("/api/rates");
  return response;
};

export const createRates = async (formData) => {
  const { data } = await axiosInstance.post(`/api/rates`, formData);
  return data;
};

export const updateRates = async (id, formData) => {
  const { data } = await axiosInstance.put(`/api/rates/${id}`, formData);
  return data;
};
