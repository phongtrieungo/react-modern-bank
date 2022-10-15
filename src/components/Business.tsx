import { features } from '../constants';
import styles, { layout } from '../style';
import { Button } from './Button';

const FeatureCard = ({ icon, content, title }: { icon: string, title: string, content: string, id: string }) => (
    <section className={`flex p-6 rounded-[20px] mb-6 last:mb-0 feature-card`}>
        <span className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img className='w-[50%] h-[50%] object-contain' src={icon} alt="icon" />
        </span>
        <span className='flex-1 flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text=[18px] leading-[23px] mb-1'>{title}</h4>
            <p className='font-poppins font-normal text-dimWhite text=[16px] leading-[24px] mb-1'>{content}</p>
        </span>
    </section>
);

export const Business = () => (
    <section id='features' className={`${layout.section}`}>
        <section className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>You do the business, <br className='sm:block hidden' /> we’ll handle the money.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with
                hundreds of credit cards on the market.
            </p>

            <Button styles='mt-10' text={'Get Started'} />
        </section>

        <section className={`${layout.sectionImg} flex-col`}>
            {features.map((feature) => (
                <FeatureCard {...feature} key={feature.id} />
            ))}
        </section>
    </section>
);
