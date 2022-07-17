import Image from 'next/image';

const Footer = ()  => {
    return (
    <div className='cont_carousel' >
    <div className='wrapper_carousel'>
     <div className='center_art'><Image src="/Ellipse_adult.png" width = {300} height= {300} alt=""/></div>
     <div className='position_ellips'>
     <div className='plus_1' ><Image className='plus' src="/top_top.png" width = {111} height= {106} alt=""/></div>
     <div className='plus_2'><Image className='plus' src="/left_top.png" width = {111} height= {106} alt=""/></div>
     <div className='plus_3'><Image className='plus' src="/left_middle.png" width = {111} height= {106} alt=""/></div>
     <div className='plus_4'><Image className='plus' src="/middle.png" width = {111} height= {106} alt=""/></div>
     <div className='plus_5'><Image className='plus' src="/bottow.png" width = {111} height= {106} alt=""/></div>
     <div className='plus_6'><Image className='plus' src="/right_top.png" width = {111} height= {106} alt=""/></div>
     <div className='plus_7'><Image className='plus' src="/right_middle.png" width = {111} height= {106} alt="#"/></div>
     <div className='plus_8'><Image className='plus' src="/middle2.png" width = {111} height= {106} alt="#"/></div>
     </div>
    </div>
     
    </div>
    )
    
};

export default Footer;