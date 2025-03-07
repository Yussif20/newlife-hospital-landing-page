// components/button.ts
import { cva } from 'class-variance-authority';

const button = cva('px-6 duration-200 font-poppins leading-6 rounded h-12', {
  variants: {
    variant: {
      primary: 'text-white bg-blue-500 hover:bg-blue-600',
      secondary: 'bg-white border border-black dark:text-black',
      green: 'text-white bg-basicGreen hover:bg-green-400',
    },
    size: {
      sm: 'w-[142px]',
      md: 'w-[234px]',
      lg: 'w-[370px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const Button = ({
  children,
  variant,
  size,

  className,

  ...props
}) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};
export default Button;
