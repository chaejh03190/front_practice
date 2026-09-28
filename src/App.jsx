import profile_image from './assets/image.png'
function App() {
  return (
    
    <main className='page_1'>
      {/* profile card */}
      <div className='profileCard'>
        <img className='profileCard__profileImage' src={profile_image} alt="인물사진" />
          <p className='profileCard__name'>채정훈</p>
          <p className='profileCard__role'>frontend</p>
          <p className='profileCard__role'>열심히배우는프론트엔드 개발자입니다</p>
      </div>
      {/* detail info */}
      <div className='detailCard'>
        <div className='detailCard__brief'>
          <p className='detailCard__name'>채정훈</p>
          <p className='detailCard__role'>frontend</p>
          <p className='detailCard__role'>열심히배우는프론트엔드 개발자입니다</p>
        </div>
        {/* detailed introduction */}
        <div className='detailCard__introduction'>
          <p className='detailCard__introductionTitle'>자기소개</p>
          <p className='detailCard__introductionContent'>안녕하세요. 저는 프론트엔드 개발자 채정훈입니다. 저는 사용자 경험을 최우선으로 생각하며,
             최신 웹 기술을 활용하여 직관적이고 반응성이 뛰어난 웹 애플리케이션을 개발하는 것을 목표로 하고 있습니다. 또한, 팀과의 협업을 중요시하며, 
             지속적인 학습과 성장에 열정을 가지고 있습니다.
          </p>
        </div>
        {/*contact*/}
        <div className='detailCard__contact'>
          <h1 className='detailCard__contactTitle'>연락처</h1>
          <p className='detailCard__contactContent--email'>이메일: example@email.com</p>
          <p className='detailCard__contactContent--phone'>전화: 010-1234-5678</p>
        </div>
        {/* interested technologies */}
        <div className='detailCard__interestedTechnologies'>
          <p className='detailCard__interestedTechnologiesTitle'>관심 기술</p>
          <ul className='detailCard__interestedTechnologiesList'>
            <li className='detailCard__interestedTechnologiesItem'>React</li>
            <li className='detailCard__interestedTechnologiesItem'>Vue</li>
            <li className='detailCard__interestedTechnologiesItem'>TypeScript</li>
            <li className='detailCard__interestedTechnologiesItem'>Node.js</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default App