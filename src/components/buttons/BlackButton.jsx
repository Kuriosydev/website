
export default function BlackButton({ text, onClick, onChange, customStyle }) {
    return (
        <button className={`bg-black text-white text-[14px] font-normal py-4 px-8 rounded-4xl w-auto ${customStyle} dark:bg-white dark:text-black`}
            onClick={onClick}
            onChange={onChange}
        >
            {text}
        </button>
    )
}
