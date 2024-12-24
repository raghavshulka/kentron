import { cn } from "@/lib/utils";
import styles from "./common.module.css";

export const GridLineHorizontal = ({ ...props }) => {
  return (
    <>
      <div
        className={cn(styles.gridLineHorizontalDark, "hidden dark:block ")}
        {...props}
      />
      <div
        className={cn(styles.gridLineHorizontal, "block dark:hidden ")}
        {...props}
      />
    </>
  );
};

export const GridLineVertical = ({ ...props }) => {
  const baseStyles = {
    width: "1px",
    backgroundSize: "1px 32px",
    backgroundImage: "linear-gradient(to bottom, rgba(37, 67, 115, 0.3) 10px, transparent 22px)",
  };

  return (
    <>
      <div
        className={cn(styles.gridLineVerticalDark, "hidden dark:block")}
        style={{ ...baseStyles, ...props.style }}
        {...props}
      />
      <div
        className={cn(styles.gridLineVertical, "block dark:hidden")}
        style={{ ...baseStyles, ...props.style }}
        {...props}
      />
    </>
  );
};

const SectionWithGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {children}
      {/* Horizontal Grid Lines */}
      <GridLineHorizontal
        style={{
          top: 0,
          left: "-10%",
          width: "120%",
        }}
      />
      <GridLineHorizontal
        style={{
          bottom: 0,
          left: "-10%",
          width: "120%",
        }}
      />
      {/* Vertical Grid Lines */}
      <GridLineVertical
        style={{
          top: "-10%",
          right: 0,
          height: "120%",
        }}
      />
      <GridLineVertical
        style={{
          top: "-10%",
          left: 0,
          height: "120%",
        }}
      />
    </div>
  );
};

export default SectionWithGrid;



