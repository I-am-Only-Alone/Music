import MainPages from "./Pages/MainPages/MainPages"
import style from './global.module.scss'
import PlayBar from "./components/playBar/PlayBar"



const App =()=>{
  return(
    <div className={style.wrapper}>
      <MainPages/>

      < PlayBar/>
    </div>
  )
}

export default App
