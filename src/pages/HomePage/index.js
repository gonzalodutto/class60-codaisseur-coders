import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./styles.css";

const API_URL = "https://codaisseur-coders-network.herokuapp.com";

const HomePage = () => {
  const [data, setData] = useState({ loading: true, posts: [] });

  async function fetchPosts() {
    setData({ ...data, loading: true }); //before fetching data, loading is set to true

    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data.rows;

    setData({
      loading: false, //once the data is fetched, loading is set to false
      posts: posts,
    });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="HomePage">
      <div>
        <h1>Posts:</h1>
      </div>
      <div>
        {data.loading
          ? "Loading"
          : data.posts.map((post, i) => (
              <div key={i} className="postCard">
                {" "}
                <h3>{post.title}</h3> <b>Created:</b>{" "}
                {moment(post.createdAt).format("DD-MM-YYYY")}
                <div className="tags">
                  <br />
                  Tags:
                  {post.tags.map((tag, index) => (
                    <div key={index} className="tag">
                      <b> {tag.tag} </b>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export { HomePage };
