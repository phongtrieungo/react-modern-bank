import { apple, bill, google} from '../assets';
import styles, { layout } from '../style';

export const Billing = () => (
    <section id='products' className={ layout.sectionReverse }>
        <section className={ layout.sectionImgReverse}>
            <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
        </section>

        <section className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-[470px]`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
            <picture className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img src={apple} alt="appStore" className='object-contain' />
                <img src={google} alt="playStore" className='ml-4 object-contain' />
            </picture>
        </section>
    </section>
);

