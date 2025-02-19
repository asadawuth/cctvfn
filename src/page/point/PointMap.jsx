import PointMapLayout1 from "../../layoutcomponent/ForPointMap/PointMapLayout1";
import PointMapLayout2 from "../../layoutcomponent/ForPointMap/PointMapLayout2";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PointMap() {
  const [data, setData] = useState([]);
  const [searchId, setSearchId] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.masscorporation.site/api/v1/map/markerdata")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (id) => {
    setSearchId(id);
  };

  // console.log(data);
  return (
    <>
      <PointMapLayout1 onSearch={handleSearch} />
      <PointMapLayout2 data={data} searchId={searchId} />
    </>
  );
}
