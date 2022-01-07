interface LogoProps {
  lightMode?: boolean;
  className?: string;
}

export const Logo = ({ lightMode = true, className = 'h-6', ...props }: LogoProps) => {
  return (
    <img
      src={`${lightMode ? '/images/logo-light.svg' : '/images/logo.svg'}`}
      alt=""
      className={`${className}`}
      {...props}
    />
  );
};

Logo.displayName = 'Logo';
