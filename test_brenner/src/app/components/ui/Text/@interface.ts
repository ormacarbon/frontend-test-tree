export interface ITextStyled {
    fontsize?: string;
    color?: string;
} 

export interface ITextProps extends ITextStyled {
    children: React.ReactNode;
}
