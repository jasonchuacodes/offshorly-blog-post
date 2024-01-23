type ButtonProps = {
    label: string;
    className?: string;
    onClick: (e:any) => void;
}

function Button(props: ButtonProps) {
    const { label, className, onClick } = props
    return (
        <button onClick={onClick} type="submit" className={`flex justify-center min-w-20 px-4 py-2 text-base border border-slate-500 bg-white uppercase ${className}`}>
            { label }
        </button>
    )
}

export default Button