import AlbumCard from '../components/AlbumCard';
import './Album.css';

const Album = () => {
  const tracklist1 = [
    { number: '01', title: 'Before Anyone Else', lyrics: 'YENA, 72', composer: 'YENA, pollock, Mayu Wakisaka' },
    { number: '02', title: 'SMILEY (Feat. BIBI)', lyrics: '트웰브 (twlv), BIBI, YENA, 72', composer: 'Olof Lindskog, Gavin Jones, Hayley Aitken, 트웰브 (twlv), BIBI' },
    { number: '03', title: 'Lxxk 2 U', lyrics: '문다은(MUMW), 남혜주(MUMW), YENA, 72', composer: 'pollock, Jonathan Sim, Mayu Wakisaka, Drew Louis, Jayelle Gerber' },
    { number: '04', title: 'PRETTY BOYS', lyrics: '안영주(MUMW), 조이아(MUMW), YENA, 72', composer: 'Tobias Naslud, Kirubel Swedin, Jonna Hall, Maria Marcus' },
    { number: '05', title: 'VACAY', lyrics: '강은정, 72', composer: 'pollock, Mayu Wakisaka, Drew Louis, Jayelle Gerber' },
  ];

  const tracklist2 = [
    { number: '01', title: 'SMARTPHONE', lyrics: 'YENA, 72', composer: 'David Amber, Sean Michael Alexander' },
    { number: '02', title: 'Make U Smile', lyrics: 'YENA, danke', composer: '김연서, 이우진' },
    { number: '03', title: 'WithOrWithOut', lyrics: 'YENA, 72', composer: 'Aaron Kim, Gabriel Brandes' },
    { number: '04', title: 'Lemon-Aid', lyrics: 'YENA, danke', composer: 'Peter Tambakis, Gabriel Brandes' },
    { number: '05', title: 'U', lyrics: 'YENA, danke', composer: 'Ollipop, Ludwig Lindell' },
  ];

  return (
    <div className="album-container">
      <h1 className="album-title">Yena's Album 🎀 💁‍♀️</h1>

      {/* 1st Album */}
      <AlbumCard
        image="/yena1.jpg"
        title="1st Mini Album 《ˣ‿ˣ (SMiLEY)》"
        subtitle="ˣ‿ˣ (SMiLEY)"
        info="2022. 01. 17. | 16분 36초 | 5곡"
        tracklist={tracklist1}
      />

      {/* 2nd Album */}
      <AlbumCard
        image="/yena2.jpg"
        title="2nd Mini Album 《SMARTPHONE》"
        subtitle="SMARTPHONE"
        info="2022. 08. 03. | 16분 47초 | 5곡"
        tracklist={tracklist2}
        color="#d94678"  // 선택사항: 배경색 변경 원할 경우
      />
    </div>
  );
};

export default Album;
