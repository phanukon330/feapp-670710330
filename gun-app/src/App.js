//import logo from './logo.svg';
//import './App.css';

//function App() {
  //const name = 'Phanukon';
  //const year = 2026;

  //return (
    //<div>
      //<h1>สวัสดี {name}!</h1>
      //<p>ปีนี้คือปี {year} อีก 4 ปีจะเป็นปี {year + 4}</p>
      //<p>ตอนนี้เวลา {new Date().toLocaleTimeString('th-TH')}</p>
    //</div>
  //);
//}

//export default App;

import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';




// function App() {
//   return (
//     <div>
//       <Header />
//       <MovieList />
//       <Greeting name="gun" year={3} />
//       <Greeting name="tae" year={2} />
//       <Greeting name="mai" year={4} />
//       <Footer />
//     </div>
//   );
// }

// const students = [
//   { id: 1, name: 'gun',   year: 3 },
//   { id: 2, name: 'tae', year: 2 },
//   { id: 3, name: 'mai', year: 4 },
// ];

// function App() {
//   return (
//     <div>
//       <Card title="ประกาศ">
//   <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
//   <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
// </Card>
//       <h1>รายชื่อนักศึกษา</h1>
//       {students.map((s) => (
//         <Greeting key={s.id} name={s.name} year={s.year} />
//       ))}
//     </div>
//   );
// }

import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'จิณห์วรา ด้วงช้าง', nickname: 'ไหม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โกโก้', 'หมา'] },
  
  { id: 2, name: 'ภานุกร กี่อนุกูล', nickname: 'กัน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'หมา'] },
  
  { id: 3, name: 'ภาคิน กี่อนุกูล', nickname: 'กั้ย',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



