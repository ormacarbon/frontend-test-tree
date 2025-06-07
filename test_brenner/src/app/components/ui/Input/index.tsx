import { InputHTMLAttributes } from 'react';
import { InputStyled } from './styles';
import { IInputProps } from './@interface';

export function Input({ width, height, ...rest }: IInputProps){
    return(
        <InputStyled 
            width={width}
            height={height}
            {...rest}
        />
    )
}