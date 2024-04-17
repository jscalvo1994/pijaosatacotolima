import { titleFonts } from "@/config/fonts";

interface Props {
    title: string;
    subtitle?: string;
    className?: string;

}



export const Title = ({ title, subtitle, className }: Props) => {
    return (
        <div className={`mt-3 ${className}`}>
            <h1 className={`${titleFonts.className}`}>{title}</h1>
            {subtitle && <h2 className="text-xl font-light">{subtitle}</h2>}
        </div>
    );
}