import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos , setVideos] = useState([]);
  const [selectedVideo , setSElectedVideo] = useState(null);

  const selecteVideo = (video) =>{
    setSElectedVideo(video);
  }
  const search = query =>{
    setSElectedVideo(null); // 검색후 다시 목록으로가기위해 사용
    youtube.search(query)
    .then(videos => setVideos(videos));
  }
  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
      
  },[])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selecteVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
