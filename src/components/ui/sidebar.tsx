import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classname";

const sidebarVariants = cva("flex flex-col bg-background border-r", {
  variants: {
    variant: {
      default: "border-border",
      ghost: "border-transparent",
    },
    size: {
      default: "w-64",
      sm: "w-48",
      lg: "w-80",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(sidebarVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-16 shrink-0 items-center border-b px-6", className)}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 overflow-auto", className)} {...props} />
));
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex shrink-0 items-center border-t px-6", className)}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

const SidebarNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("flex flex-col gap-2 p-4", className)}
    {...props}
  />
));
SidebarNav.displayName = "SidebarNav";

const SidebarNavItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
    badge?: React.ReactNode;
  }
>(({ className, active, badge, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      active
        ? "bg-primary/10 text-primary border-primary border-r-2"
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      className,
    )}
    {...props}
  >
    {children}
    {badge && (
      <span className="bg-primary text-primary-foreground ml-auto rounded-full px-2 py-1 text-xs font-medium">
        {badge}
      </span>
    )}
  </a>
));
SidebarNavItem.displayName = "SidebarNavItem";

const SidebarNavGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
));
SidebarNavGroup.displayName = "SidebarNavGroup";

const SidebarNavGroupTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-muted-foreground px-3 py-2 text-xs font-semibold",
      className,
    )}
    {...props}
  />
));
SidebarNavGroupTitle.displayName = "SidebarNavGroupTitle";

const SidebarNavSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-border my-2 border-t", className)}
    {...props}
  />
));
SidebarNavSeparator.displayName = "SidebarNavSeparator";

const SidebarUser = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    name: string;
    email?: string;
    avatar?: string;
  }
>(({ className, name, email, avatar, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 px-3 py-2", className)}
    {...props}
  >
    <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium">
      {avatar ? (
        <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
          {name.charAt(0).toUpperCase()}
        </div>
      ) : (
        name.charAt(0).toUpperCase()
      )}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-foreground truncate text-sm font-medium">{name}</p>
      {email && (
        <p className="text-muted-foreground truncate text-xs">{email}</p>
      )}
    </div>
  </div>
));
SidebarUser.displayName = "SidebarUser";

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarNavItem,
  SidebarNavGroup,
  SidebarNavGroupTitle,
  SidebarNavSeparator,
  SidebarUser,
};
