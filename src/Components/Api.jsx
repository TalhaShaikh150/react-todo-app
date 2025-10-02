import React, { useEffect } from "react";

const Api = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      console.log(result);
    };
    fetchData();
  }, []);
  return <div>Api</div>;
};

export default Api;
