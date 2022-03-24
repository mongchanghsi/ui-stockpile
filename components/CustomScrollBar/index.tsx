import AutoScrollContainer from 'auto-scroll-container'
import {useState } from 'react'
import sample1 from "../../public/assets/samplePic1.png"
import sample2 from "../../public/assets/samplePic2.png"
import sample3 from "../../public/assets/samplePic3.png"
import sample4 from "../../public/assets/samplePic4.png"
import sample5 from "../../public/assets/samplePic5.png"
import sample6 from "../../public/assets/samplePic6.png"

const CustomScrollBar = () => {
  const [scroll, setScroll] = useState({ scrollX: 0, viewX: 0, scrollY: 0, viewY: 0  })
  const onChange = (event: any) => {
    console.log(event.target.value)
    setScroll({...scroll, scrollX:event.target.value})
  }
  console.log(scroll)
  return (
    
    <div >
    <AutoScrollContainer
      className='my-scroll-style'
      scrollPos={scroll}
      setScrollPos={setScroll}
    >
      <div className='container'>
        <img src={sample1.src} alt="sample"/>
        <img src={sample2.src} alt="sample"/>
        <img src={sample3.src} alt="sample"/>
        <img src={sample4.src} alt="sample"/>
        <img src={sample5.src} alt="sample"/>
        <img src={sample6.src} alt="sample"/>
      </div>
    </AutoScrollContainer>
    <div className='center-alignn'>
    {/* <label for="scrollX">scrollX = {scroll.scrollX}</label> */}
      <input id="scrollX" type="range" min="0" max="10" step="0.1" name="scrollX" onChange={onChange}/>
      </div>
      </div>
  )
}

export default CustomScrollBar