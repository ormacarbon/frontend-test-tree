export type ButtonVariantColor = 'primary' | 'success';

export interface IButtonStyled extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    variant: ButtonVariantColor;
    width: string;
    height: string;
}