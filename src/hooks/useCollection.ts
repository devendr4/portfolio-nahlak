import { useState, useEffect } from "react";
import { db } from "../firebase-config";

type Props = {
  name: string;
};

const useCollection = ({ name }: Props) => {
  const [collection, setCollection] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    db.collection(name)
      .get()
      .then((data) => {
        setCollection(data.docs.map((doc) => doc.data()));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(err);
      });
  }, [name]);
  return { isLoading, collection, error };
};

export default useCollection;
