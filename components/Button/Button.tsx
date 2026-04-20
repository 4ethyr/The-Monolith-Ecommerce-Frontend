type ButtonProps = {
    // variant: "primary" | "secondary" | "outline" | "destructive";
    // size: "small" | "medium" | "large";
    // disabled?: boolean; 
    title?: string;
    className?: string; // <-- Apenas isso!
}

const Button = ({  title, className }: ButtonProps) => {
  return (
    <button className={className}>
        {title}
    </button>
  )
}

export default Button;