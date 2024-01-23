import Link from 'next/link';

type LinkButtonProps = {
    label: string;
    href: string;
};

function LinkButton(props: LinkButtonProps) {
    const { label, href } = props;
    return (
        <div
            className={`flex justify-center w-full min-w-20 px-4 py-2 text-base border border-slate-500 bg-white uppercase cursor-pointer`}
        >
            <Link href={href}>{label}</Link>
        </div>
    );
}

export default LinkButton;
