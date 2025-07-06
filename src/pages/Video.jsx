import React, { useState, useEffect } from 'react';
import './Video.css';

const Video = () => {
  const [videoLinks, setVideoLinks] = useState([]);
  const [input, setInput] = useState('');

  // ⭐ localStorage에서 로드
  useEffect(() => {
    const saved = localStorage.getItem('videoLinks');
    if (saved) {
      setVideoLinks(JSON.parse(saved));
    }
  }, []);

  // ⭐ localStorage에 저장
  useEffect(() => {
    localStorage.setItem('videoLinks', JSON.stringify(videoLinks));
  }, [videoLinks]);

  const extractVideoId = (url) => {
    const regex = /(?:\?v=|\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleAddVideo = () => {
    const videoId = extractVideoId(input);
    if (videoId) {
      if (!videoLinks.includes(videoId)) {
        setVideoLinks([...videoLinks, videoId]);
        setInput('');
      } else {
        alert("이미 추가된 영상입니다!");
      }
    } else {
      alert("유효한 유튜브 링크를 넣어주세요!");
    }
  };

  const handleRemove = (id) => {
    setVideoLinks(videoLinks.filter((v) => v !== id));
  };

  return (
    <div className="video-container">
      <h1>🎬 예나 영상 모음</h1>
      <div className="video-input">
        <input
          type="text"
          placeholder="유튜브 링크를 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddVideo}>추가</button>
      </div>

      <div className="video-grid">
        {videoLinks.map((id, idx) => (
          <div key={idx} className="video-card">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`Yena Video ${idx}`}
              frameBorder="0"
              allowFullScreen
            />
            <button className="remove-btn" onClick={() => handleRemove(id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
