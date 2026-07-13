import { Link } from "react-router-dom";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "fill" | "outline" | "outline-light" | "onlight";
  className?: string;
};

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  fill: "btn-fill",
  outline: "btn-outline",
  "outline-light": "btn-outline on-light",
  onlight: "btn-onlight",
};

export default function Button({ href, children, variant = "fill", className = "" }: ButtonProps) {
  const classes = `btn ${variantClass[variant]} ${className}`.trim();

  // Same-page anchors (#appointment) and external links use a plain <a>;
  // everything else routes through React Router.
  if (href.startsWith("#") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}
