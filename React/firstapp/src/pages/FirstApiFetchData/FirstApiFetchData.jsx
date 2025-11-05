import { useEffect, useState } from "react";
import axios from "axios";
function FirstApi() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState("");
  const [clickId, setClickId] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data)
      .then((data) => setPost(data));
  }, [id]);

  function handleChange(e) {
    setId(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <h1>FirstApiFetchData</h1>
      {/* {post.map((post) => (
    <div key={post.id}> */}

      <input type="number" onChange={handleChange} placeholder="enter id for data" />
      <button>Fetch User data</button>
      <h1>{post.id}</h1>
      <h1>{post.body}</h1>
    </>
  );
}
export default FirstApi;
