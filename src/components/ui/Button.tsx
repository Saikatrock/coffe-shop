import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'light';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  to?: string;
}

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary: 'bg-amber-800 text-white hover:bg-amber-900',
  outline: 'border border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white',
  light: 'bg-white text-amber-900 hover:bg-amber-100',
};

export default function Button({
  variant = 'primary',
  to,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
