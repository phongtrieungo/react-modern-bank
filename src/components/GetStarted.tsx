import styles from '../style';
import arrowUp from '../assets/arrow-up.svg';

export const GetStarted = () => (
    <span className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <span className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <span className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                    <span className='text-gradient'>Get</span>
                </p>
                <img src={arrowUp} alt="arrow up" className='w-[23px] object-contain' />
            </span>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                <span className='text-gradient'>Started</span>
            </p>
        </span>
    </span>
)