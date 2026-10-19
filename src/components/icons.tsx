import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/lib/navigation";

type IconProps = SVGProps<SVGSVGElement>;

function Svg(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
    </Svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m21 8-9-5-9 5 9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </Svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.5L21 8H7" />
    </Svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 19a5 5 0 0 1 5-4.6" />
    </Svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 16V8" />
      <path d="M16 16v-8" />
    </Svg>
  );
}

export function LayoutIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9h17" />
      <path d="M10 9v11" />
    </Svg>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.4" />
      <path d="m7.5 16.5 3.2-3.2 2.3 2.3 2.5-3 3.5 3.9" />
    </Svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17h1.2a2.3 2.3 0 0 0 2.1-3.3 2.3 2.3 0 0 1 2-3.4H18a3.5 3.5 0 0 0 0-7A8.5 8.5 0 0 0 12 3.5Z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="14" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </Svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </Svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 16V11a6 6 0 1 1 12 0v5l1.2 2H4.8Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

const icons: Record<IconName, (props: IconProps) => ReactNode> = {
  home: HomeIcon,
  box: BoxIcon,
  cart: CartIcon,
  users: UsersIcon,
  chart: ChartIcon,
  layout: LayoutIcon,
  image: ImageIcon,
  palette: PaletteIcon,
  menu: MenuIcon,
};

export function NavIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
