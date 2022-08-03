import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createRates, updateRates, getRates } from "../../../api/rate";

export const useGetRate = () => {
  return useQuery(["getRates"], () => getRates(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useCreateRate = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateRates"], (formData) => createRates(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getRates"]);
      toast.success("Succesfully added rates");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateRate = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["updateRates"],
    (id, formData) => updateRates(id, formData),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["getRates"]);
        toast.success("Succesfully update rates");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};
