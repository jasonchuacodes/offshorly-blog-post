function InputField({
    name,
    label,
    type = 'string',
    className,
    handleChange,
}: {
    name: string;
    type?: string;
    label?: string;
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
                type={type}
                id="input-field"
                className={`flex flex-1 min-h-10 px-4 border border-slate-500 ${className}`}
            />
        </>
    );
}

export default InputField;
