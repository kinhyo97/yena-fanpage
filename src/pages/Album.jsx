import { useState } from 'react';
import './Album.css';

const Album = () => {
  const [showTracklist, setShowTracklist] = useState(false); // ✅ 트랙리스트 상태 추가

  return (
    <div className="album-container">
      <h1 className="album-title">최예나 소개 페이지 💁‍♀️</h1>

      {/* 1st Mini Album */}
      <section className="album-section bordered-section">
        <h2 className="album-heading">
          1st Mini Album <span className="album-name">《ˣ‿ˣ (SMiLEY)》</span>
        </h2>

        <div className="album-card">
          <img src="/yena1.jpg" alt="smiley cover" className="album-image" />
          <div className="album-meta">
            <div className="album-meta-title">ˣ‿ˣ (SMiLEY)</div>
            <div className="album-meta-sub">The 1st Mini Album</div>
            <div className="album-meta-info">2022. 01. 17. | 16분 36초 | 5곡</div>
          </div>
        </div>

        {/* ✅ 토글 버튼 */}
        <div
  className="tracklist-toggle-card"
  onClick={() => setShowTracklist(!showTracklist)}
>
  [ TRACK LIST ]
</div>

        {/* ✅ 트랙리스트 테이블 토글 */}
        {showTracklist && (
          <div className="tracklist-table-wrapper">
            <table className="tracklist-table">
              <thead>
                <tr>
                  <th>트랙</th>
                  <th>제목</th>
                  <th>작사</th>
                  <th>작곡</th>
                  <th>편곡</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Before Anyone Else</td>
                  <td>YENA, 72</td>
                  <td>YENA, pollock, Mayu Wakisaka</td>
                  <td>pollock</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>SMILEY (Feat. BIBI)</td>
                  <td>트웰브 (twlv), BIBI, YENA, 72</td>
                  <td>Olof Lindskog, Gavin Jones, Hayley Aitken, 트웰브 (twlv), BIBI</td>
                  <td>OLLIPOP</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Lxxk 2 U</td>
                  <td>문다은(MUMW), 남혜주(MUMW), YENA, 72</td>
                  <td>pollock, Jonathan Sim, Mayu Wakisaka, Drew Louis, Jayelle Gerber</td>
                  <td>pollock, Jonathan Sim</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>PRETTY BOYS</td>
                  <td>안영주(MUMW), 조이아(MUMW), YENA, 72</td>
                  <td>Tobias Naslud, Kirubel Swedin, Jonna Hall, Maria Marcus</td>
                  <td>Tobias Naslud, Kirubel Swedin</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>VACAY</td>
                  <td>강은정, 72</td>
                  <td>pollock, Mayu Wakisaka, Drew Louis, Jayelle Gerber</td>
                  <td>pollock</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default Album;
