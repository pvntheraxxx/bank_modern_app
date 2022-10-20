import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className = "font-poppins font-medium text-[18px] leading-[23px]">
            <span className="font-poppins font-medium text-[18px] leading-[23px]">
              <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
            </span>
          </p>
        </div>
        <p className = "font-poppins font-medium text-[18px] leading-[23px]">
            <span className="font-poppins font-medium text-[18px] leading-[23px]">
              Started
            </span>
          </p>

      </div>

    </div>
  )
}

export default GetStarted