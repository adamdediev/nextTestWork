import Header_info_adult from "./header_info_adult";
import Header_info_kids from "./Header_info_kids";

const Header = () => {
  return (
    <header>
    <div className="title">
    <div className="title_title">А вдруг СМА?</div>
    <div className="title_subtitle">Выберите, кто Ваш пациент:</div>
    </div>
    <div className="cont_flex" >
        <Header_info_adult/>
        <Header_info_kids/> 
    </div>
    <div className = "Messang">Сообщает ли один из ваших пациентов о следующих симптомах?<a>(нажмите на любую иконку и узнайте больше)</a></div>
    </header> 
  )  
};

export default Header;