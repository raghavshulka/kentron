import { cn } from "@/lib/utils";
import { GridLineHorizontal } from "../grid-lines";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div className="relative w-full">
    
      <div
        className={cn(
          "grid grid-cols-1 overflow md:grid-cols-3 w-full mx-auto",
          className
        )}
        {...props}
      >
          <GridLineHorizontal
        style={{
          top: 0,
          left: "-10%",
          width: "120%",
        }}
      />
        {children}
        <GridLineHorizontal
        style={{
          bottom: 0,
          left: "-10%",
          width: "120%",
        }}
      />
      </div>
      
    </div>
  );
}

interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  description?: string;
  className?: string;
}

export function BentoGridItem({
  header,
  description,
  className,
  ...props
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "row-span-1 group/bento transition duration-200 shadow-input dark:shadow-none dark:bg-black bg-white relative",
        "before:absolute before:inset-0 before:border-[1px] md:before:border-[1.5px] before:border-dashed before:border-[#25437329]",
        className
      )}
      {...props}
    >
      <div className="relative">
        <div className="p-[20px] text-black font-[500]">{description}</div>
      </div>
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 w-full">
        {header}
      </div>
    </div>
  );
}
