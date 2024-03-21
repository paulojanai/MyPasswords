import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import { theme } from '../../theme';

interface IButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  children?: React.ReactNode;
  style?: ViewStyle;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  style,
  ...rest
}: IButtonProps) => {
  return (
    <Pressable {...rest} style={[styles(variant, size).btnStyle, style]}>
      <Text style={styles(variant, size).btnText}>{children}</Text>
    </Pressable>
  );
};

const styles = (variant: string, size: string) =>
  StyleSheet.create({
    btnStyle: {
      paddingHorizontal: 24,
      paddingVertical: size === 'small' ? 14 : 20,
      borderRadius: 12,
      borderWidth: 2,
      borderColor:
        variant === 'primary'
          ? theme.colors.primary[500]
          : theme.colors.neutral[900],
      backgroundColor:
        variant === 'primary' ? theme.colors.primary[500] : 'transparent',
    },

    btnText: {
      color:
        variant === 'primary'
          ? theme.colors.primary[50]
          : theme.colors.neutral[900],
      fontSize: size === 'small' ? 16 : 18,
      fontWeight: 'bold',
    },
  });

export default Button;
