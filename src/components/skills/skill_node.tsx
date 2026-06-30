import React from 'react';
import type { IconType } from 'react-icons';

interface SkillNodeProps {
  Icon: IconType;
  color: string;
  name: string;
  x: number;
  y: number;
  size: number;
  big?: boolean;
  isHovered: boolean;
  onMouseEnter: (name: string) => void;
  onMouseLeave: () => void;
}

const SkillNode: React.FC<SkillNodeProps> = ({ 
  Icon, 
  color, 
  name, 
  x, 
  y, 
  size, 
  big = false,
  isHovered,
  onMouseEnter,
  onMouseLeave 
}) => {
  return (
    <div
      className="absolute group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => onMouseEnter(name)}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`
          relative flex items-center justify-center rounded-xl
          transition-all duration-500 ease-out
          ${big 
            ? 'bg-gradient-to-br from-[#7C3AED]/40 to-[#15122A] border-2 border-[#A78BFA]/60 shadow-[0_0_50px_-5px_rgba(124,58,237,0.5)]' 
            : 'bg-[#15122A] border border-[#7C3AED]/30 hover:border-[#A78BFA]/60 hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]'
          }
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div className="transition-all duration-500 ease-out group-hover:scale-110">
          <Icon 
            size={size * 0.5} 
            color={isHovered ? color : '#2D2A4A'}
            className="transition-all duration-500 ease-out"
          />
        </div>
      </div>

      {/* Tooltip */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 -bottom-8
          px-3 py-1.5 rounded-lg
          bg-[#1A1530] border border-[#7C3AED]/40
          text-white text-xs font-medium
          transition-all duration-300 ease-out
          whitespace-nowrap z-50
          ${isHovered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2 pointer-events-none'
          }
        `}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A1530] border-t border-l border-[#7C3AED]/40 rotate-45" />
        {name}
      </div>
    </div>
  );
};

export default SkillNode;