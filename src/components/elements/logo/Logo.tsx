interface LogoProps {
  lightMode?: boolean;
  className?: string;
}

export const Logo = ({ lightMode = true, className = 'h-14', ...props }: LogoProps) => {
  return (
    <img
      src={`${lightMode ? '/images/logo.png' : '/images/logo.png'}`}
      alt=""
      className={`${className}`}
      {...props}
    />
  );
};

Logo.displayName = 'Logo';
