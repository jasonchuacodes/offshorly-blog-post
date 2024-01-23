type ButtonProps = {
    label: string;
    className?: string;
    onClick: () => void;
}

function Button(props: ButtonProps) {
    const { label, className, onClick } = props
    return (
        <button onClick={onClick} type="submit" className={`flex justify-center max-w-fit px-4 py-1 text-sm border border-slate-500 bg-white ${className}`}>
            { label }
        </button>
    )
}

export default Button