import React from 'react';
import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  size?: number;
  className?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ name, size = 24, className = "" }) => {
  // Cast to ElementType to satisfy TS JSX requirements
  const Icon = (Icons[name as keyof typeof Icons] || Icons.HelpCircle) as React.ElementType;
  return <Icon size={size} className={className} />;
};

export default IconRenderer;