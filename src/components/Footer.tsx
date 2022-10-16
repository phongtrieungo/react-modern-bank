import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants/index';

export const Footer = () => (
    <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <section className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <span className='flex flex-col flex-1 justify-start mr-10'>
                <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
                <p className={`${styles.paragraph} max-w-[320px] mt-9`}>A new way to make the payments easy, reliable and secure.</p>
            </span>

            <span className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                {footerLinks.map(link => (
                    <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='text-white font-poppins font-medium text-[18px] leading-[27px]'>{link.title}</h4>
                        <ul className='list-none'>
                            {link.links.map(item => (
                                <li key={item.name} className='text-dimWhite font-poppins font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer mt-5'>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </span>
        </section>

        <section className='flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-2'>
            <p className='text-white font-poppins text-center font-normal text-[18px] leading-[27px] flex'>
                Copyright
                <svg className='mx-3' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8 13.8182C4.79185 13.8182 2.18182 11.2081 2.18182 8C2.18182 4.79185 4.79185 2.18182 8 2.18182C11.2081 2.18182 13.8182 4.79185 13.8182 8C13.8182 11.2081 11.2081 13.8182 8 13.8182ZM10.1613 9.32829L11.3408 10.4239L10.7465 10.9441C10.002 11.5954 9.05105 11.9543 8.06887 11.9543C5.86204 11.9543 4.06662 10.1959 4.06662 8.03462C4.06662 5.87833 5.86204 4.124 8.06887 4.124C9.05185 4.124 9.99964 4.47949 10.7374 5.12502L11.31 5.62611L10.1796 6.75709L9.67774 6.31367C9.24596 5.93236 8.67469 5.72233 8.06887 5.72233C6.74335 5.72233 5.66495 6.75964 5.66495 8.03454C5.66495 9.31454 6.74335 10.3559 8.06887 10.3559C8.668 10.3559 9.23935 10.1425 9.67774 9.75527L10.1613 9.32829Z" fill="white" fill-opacity="0.6" />
                </svg>
                2021 HooBank. All Rights Reserved.
            </p>
            <span className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map(icon => (
                    <img key={icon.id} src={icon.icon} alt="icon-link" className={` w-[21px] h-[21px] object-contain cursor-pointer ml-3`} />
                ))}
            </span>
        </section>
    </section>
);
