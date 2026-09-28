import profile_image from './assets/image.png'
function App() {
  return (
    <main className='page_1'>
      <div className='profileCard'>
        <img className='profileCard__profileImage' src={profile_image} alt="인물사진" />
          <h1 className='profileCard__name'>채정훈</h1>
          <h2 className='profileCard__role'>frontend</h2>
          <h3 className='profileCard__role'>열심히배우는프론트엔드 개발자입니다</h3>
      </div>
      <div className='detail'>
        <h1 className='detail'>채정훈</h1>
        <h2 className='detail__role'>frontend</h2>
        
      </div>
    </main>
  )
}

export default App