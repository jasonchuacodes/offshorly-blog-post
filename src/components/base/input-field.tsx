function InputField({
    name,
    label,
    className,
    handleChange,
}: {
    name: string;
    label: string;
    className?: string;
    handleChange: (e: any) => void;
}) {
    return (
        <>
            <label htmlFor="input-field" className="font-bold">
                {label}
            </label>
            <input
                onChange={handleChange}
                name={name}
                type="text"
                id="input-field"
                className={`flex flex-1 min-h-16 px-4 border border-slate-500 ${className}`}
            />
        </>
    );
}

export default InputField;
