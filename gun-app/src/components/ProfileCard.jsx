function ProfileCard({
  name,
  nickname,
  major = 'ยังไม่ระบุสาขา',
  favorites
}) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>ชื่อเล่น: {nickname}</p>
      <p>สาขา: {major}</p>

      <h3>สิ่งที่ชอบ</h3>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;

