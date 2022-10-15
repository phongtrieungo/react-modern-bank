
export const Button = ({ styles, text }: { styles: string, text: string}) => (
    <button type="button" className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}>
        { text }
    </button>
);
