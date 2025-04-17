
export default function YellowButton({ text, onClick, onChange, customStyle }) {
    return (
        <button className={`bg-[#FFCE49] text-black font-bold py-4 px-8 rounded-xl w-auto ${customStyle} dark:text-white`}
            onClick={onClick}
            onChange={onChange}
        >
            {text}
        </button>
    )
}
