import React, { ReactNode } from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../../theme';

interface IButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  children?: string;
  nameIconLeft?: string;
  nameIconRight?: string;
  style?: ViewStyle;
}

type IButtonIcon = {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium';
  nameIcon: string;
};

const ButtonIcon = ({ nameIcon, size, variant }: IButtonIcon) => {
  return (
    <Icon
      name={nameIcon}
      size={size === 'small' ? 18 : 22}
      color={
        variant === 'primary'
          ? theme.colors.primary[50]
          : theme.colors.neutral[900]
      }
    />
  );
};

const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth,
  nameIconLeft,
  children,
  nameIconRight,
  style,
  ...rest
}: IButtonProps) => {
  return (
    <Pressable
      {...rest}
      style={[
        styles(variant, size).btnStyle,
        fullWidth && styles().btnFullWidth,
        style,
      ]}>
      {nameIconLeft && (
        <ButtonIcon nameIcon={nameIconLeft} size={size} variant={variant} />
      )}
      <Text style={styles(variant, size).btnText}>{children}</Text>
      {nameIconRight && (
        <ButtonIcon nameIcon={nameIconRight} size={size} variant={variant} />
      )}
    </Pressable>
  );
};

const styles = (variant?: string, size?: string) =>
  StyleSheet.create({
    btnStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      paddingHorizontal: 24,
      paddingVertical: size === 'small' ? 12 : 18,
      borderRadius: 999,
      borderWidth: 2,
      borderColor:
        variant === 'primary'
          ? theme.colors.primary[500]
          : theme.colors.neutral[900],
      backgroundColor:
        variant === 'primary' ? theme.colors.primary[500] : 'transparent',
    },

    btnFullWidth: {
      width: '100%',
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
