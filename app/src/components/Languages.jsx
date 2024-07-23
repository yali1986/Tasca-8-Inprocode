import { useTranslation } from "react-i18next"
import catFlag from "../assets/cat.svg"
import englishFlag from "../assets/eng.svg"
import espanolFlag from "../assets/spa.svg"


const locales = {
  en: { title: "English", flag: englishFlag },
  es: { title: "Español", flag: espanolFlag },
  cat: { title: "Català", flag: catFlag },
}

export default function Languages() {
  const { i18n } = useTranslation("translation")

  return (
    <div className=" d-flex justify-content-center">
    <div className='d-flex justify-content-end align-items-center mb-4 mt-5 pt-5' style={{ width: "450px", height: "100px" }}>
   
     {Object.keys(locales).map((locale) => (
      <div key={locale}>
      <button 
      style={{
        backgroundColor: "bg-color", border: "none"
        }} 
        type="submit" 
        onClick={() => i18n.changeLanguage(locale) }           
        >
       <img 
                src={locales[locale].flag} 
                alt={locales[locale].title} 
                style={{ width: 50, height: 50}} 

                />  
      </button>
      </div>
      
     ))}  

  </div>
  </div>

  )
}

