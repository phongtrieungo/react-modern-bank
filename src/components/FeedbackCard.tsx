import styles from '../style';
import { quotes } from '../assets';

export const FeedbackCard = ({ content, name, title, img }: { id: string, content: string, name: string, title: string, img: string }) => (
    <section className='flex justify-between flex-col px-10 py-2 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card gap-10'>
        <img src={quotes} alt="quote" className='object-contain w-[42px] h-[27px]' />
        <p className={`${styles.paragraph}`}>{content}</p>
        <span className='flex flex-row gap-4'>
            <img src={img} alt="avatar" className='w-[48px] h-[48px] object-contain' />
            <span className='flex-1'>
                <p className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</p>
                <p className='font-poppins font-normal text-[18px] leading-[27px] text-dimWhite'>{title}</p>
            </span>
        </span>
    </section>
)