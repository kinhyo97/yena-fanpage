import { useState } from 'react';
import './AlbumCard.css'; // 꼭 존재해야 함

const AlbumCard = ({ image, title, subtitle, info, tracklist, color = '#3f2e99' }) => {
  const [showTracklist, setShowTracklist] = useState(false);

  return (
    <section className="album-section">
      <h2 className="album-heading">{title}</h2>

      <div className="album-card" style={{ backgroundColor: color }}>
        <img src={image} alt="album cover" className="album-image" />
        <div className="album-meta">
          <div className="album-meta-title">{subtitle}</div>
          <div className="album-meta-sub">The Mini Album</div>
          <div className="album-meta-info">{info}</div>
        </div>
      </div>

      <div
        className="tracklist-toggle-card"
        style={{ backgroundColor: color }}
        onClick={() => setShowTracklist(!showTracklist)}
      >
        [ TRACK LIST ]
      </div>

      {showTracklist && (
        <div className="tracklist-table-wrapper">
          <table className="tracklist-table">
            <thead>
              <tr>
                <th>트랙</th>
                <th>제목</th>
                <th>작사</th>
                <th>작곡</th>
              </tr>
            </thead>
            <tbody>
              {tracklist.map((track, idx) => (
                <tr key={idx}>
                  <td>{track.number}</td>
                  <td>{track.title}</td>
                  <td>{track.lyrics}</td>
                  <td>{track.composer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AlbumCard;
