import { cn } from '@/utilities/tailwind/cn';

type AuthLogoProps = {
  className?: string;
};

export default function AuthLogo({ className }: AuthLogoProps) {
  return (
    <i
      className={cn(
        "bg-[url('https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png')] bg-[white] bg-[position:0_-52px] w-[175px] h-[51px] bg-no-repeat dark:outline-2 dark:outline-white dark:outline",
        className,
      )}
    />
  );
}
