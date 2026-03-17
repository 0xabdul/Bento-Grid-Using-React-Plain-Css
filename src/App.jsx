import starimg from './assets/illustration-five-stars.webp';
import linkimg from './assets/illustration-multiple-platforms.webp';
import calimg from './assets/illustration-consistent-schedule.webp';
import schedule from './assets/illustration-schedule-posts.webp';
import grow from './assets/illustration-grow-followers.webp';
import audience from './assets/illustration-audience-growth.webp';
import createpost from './assets/illustration-create-post.webp';
import ai from './assets/illustration-ai-content.webp';
import './App.css'

function App() {
 

  return (
   <div>
    <div className='container'>
      <div className='box-one'>
        <h1>Social Media <span className='ht'>10x</span><span className='ji'> Faster</span> with AI</h1>
        <img src={starimg} alt='logo'></img>
        <p>Over 4,000 5-star reviews</p>
      </div>
      <div className='box-two'>
        <img src={linkimg} alt='profile-img'></img>
        <h2>Manage multiple accounts and platforms.</h2>
      </div>
      <div className='box-three'>
        <h3>Maintain a consistent posting schedule.</h3>
         <img src={calimg} alt='calender-img'></img>
      </div>
      <div className='box-four'>
        <h4>Schedule to social media.</h4>
        <img src={schedule} alt='schedule -img'></img>
        <p>Optimize post timings to publish content at the perfect time for your audience.</p>
      </div>
      <div className='box-five'>
        <img src={grow} alt='grow -img'></img>
        <p>Grow followers with non-stop content.</p>
      </div>
      <div className='box-six'>
        <div className='fl'>
       <p className='hi'>&gt;56%</p> 
       <p className='o'>faster audience growth</p>
       </div>
       <img src={audience} alt='audience-img'></img>
      </div>
      <div className='box-seven'>
        <p>Create and schedule content <span className='li'>quicker.</span></p>
        <img src={createpost} alt='createpost -img'></img>
      </div>
      <div className='box-eight'>
        <p>Write your content using AI.</p>
        <img src={ai} alt='ai-content-img'></img>
      </div>
    </div>
   </div>
  )
}

export default App
