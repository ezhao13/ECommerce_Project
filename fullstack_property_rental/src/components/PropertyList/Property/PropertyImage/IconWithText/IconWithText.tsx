import { LucideIcon } from 'lucide-react';

interface Props {
  Icon: LucideIcon;
  text: string | number;
}

const IconWithText = ({ Icon, text }: Props) => (
  <span className="inline-flex items-center gap-1">
    <Icon size={13} />
    {text}
  </span>
);

export default IconWithText;
