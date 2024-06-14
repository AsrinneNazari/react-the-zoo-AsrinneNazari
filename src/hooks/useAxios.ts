import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = <T>(url: string): [boolean, T | undefined] => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const data: T = await response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!data) get();
  });
  return [loading, data];
};
