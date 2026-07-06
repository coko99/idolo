type PageMainProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageMain({ children, className = "" }: PageMainProps) {
  return <main className={`page-main ${className}`.trim()}>{children}</main>;
}
