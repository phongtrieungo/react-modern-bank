import styles from '../style';
import { Button } from './Button';

export const CTA = () => (
    <section id='cta' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <span className='flex flex-col flex-1'>
            <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </span>
        <span className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button text='Get started' styles='' />
        </span>
    </section>
)