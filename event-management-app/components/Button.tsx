// Button.tsx

import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  hoverBgVariant: string;
  height?: number;
  width?: number;
  href?: string; // Add href prop
};

const Button: React.FC<ButtonProps> = ({ type, title, icon, variant, hoverBgVariant, height, width, href }) => {
  const buttonStyle: React.CSSProperties = {
    height: height ? `${height}rem` : undefined,
    width: width ? `${width}rem` : undefined,
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <button
          type={type}
          className={`flexCenter gap-3 border ${variant} w-50 h-10  ${hoverBgVariant} cursor-pointer`}
          style={buttonStyle}
        >
          {icon && <Image src={icon} alt={title} width={24} height={24} />}
          <label>{title}</label>
        </button>
      </Link>
    );
  } else {
    // Render a regular button without Link if href is not provided
    return (
      <button
        type={type}
        className={`flexCenter gap-3 border ${variant} w-50 h-10  ${hoverBgVariant} cursor-pointer`}
        style={buttonStyle}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label>{title}</label>
      </button>
    );
  }
};

export default Button;
