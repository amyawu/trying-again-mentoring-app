/*import React, { useState  } from "react";
import {
  child,
  get,
  getDatabase,
  ref,
} from "firebase/database";

const db = getDatabase();

function DataPage() {
  const [data, setData] = useState();
  const getData = ref(db);

  useEffect(() => {
    const fetchData = () => {
      get(child(getData, "tokens/")).then((snapshot) => {
        const fetched = snapshot.val();
        console.log(fetched)
        setData(fetched);
      }); 
    };
    fetchData();
  }, []);
}

export default DataPage;
*/