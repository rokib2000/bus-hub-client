import { useEffect, useState } from "react";

const useUser = (email) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUser(data[0]);
        setIsLoading(false);
      });
  }, [email]);
  return [user, isLoading];
};

export default useUser;
