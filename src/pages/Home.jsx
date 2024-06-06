import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr); // 3 columns grid
//   gap: 10px; // Gap between grid items
// `;


const Home = ({ type }) => {
  const [videos, setVideos] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/${type}`);
        if (res.data && Array.isArray(res.data.data)) {
          setVideos(res.data.data);
        } else {
          console.error("Unexpected response data:", res.data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};


export default Home;
