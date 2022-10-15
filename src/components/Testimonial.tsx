import styles, { layout } from '../style';
import { feedback } from '../constants';
import { FeedbackCard } from './FeedbackCard';

export const Testimonials = () => (
    <section id='client' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'></div>
        <section className='flex ss:flex-row flex-col w-[100%]'>
            <h2 className={`${styles.heading2} flex-1`}>What people are <br /> saying about us</h2>
            <div className={`${styles.paragraph} flex-1 self-center`}>
                Everything you need to accept card payments <br className='xxs:hidden block' /> and grow your business anywhere on the planet.
            </div>
        </section>

        <section className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            { feedback.map(item => (
                <FeedbackCard {...item} key={item.id} />
            ))}
        </section>
    </section>
);
