import Image from 'next/image';

const Header_info_adult = () => {
   return <div className='cont'>
    <div className='art'>
      <p className='title_art'>Взрослый</p>
      <Image src="/adult.svg" width = {300} height= {300} alt=""/>   
    </div>
    <div className='text'>
    <p className = "text_3">Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.</p>
      <p className = "text_4">По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.</p>
      <p className = "text_5">По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.</p>
    </div>
    
    </div>
}

export default Header_info_adult