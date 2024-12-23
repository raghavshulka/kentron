import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3   md:max-w-7xl mx-auto ",
        className
      )}
      {...props}
    >
      {children}
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
        "row-span-1  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black  bg-white border border-neutral-200",
        className
      )}
      {...props}
    >
      <div className="relative">
        <div className=" p-[20px] text-black font-[500]">{description}</div>
      </div>
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 w-full ">
        {header}
      </div>
    </div>
  );
}
