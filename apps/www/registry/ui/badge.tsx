interface BadgeProps {
  label?: string;
  description?: string;
  className?: string;
  isLoading?: boolean;
  hidden?: boolean;
}

export function Badge({
  label,
  description,
  className = "",
  isLoading = false,
  hidden = false,
}: BadgeProps) {
  const baseClasses =
    "px-2 py-1 h-min text-white text-xs font-semibold leading-5 rounded-full capitalize text-center inline-block";

  const loadingClasses = "bg-gray-lighter text-gray-lighter animate-pulse";

  return (
    <span
      className={`${baseClasses} ${isLoading ? loadingClasses : className}`}
      hidden={hidden}
      title={description}
    >
      {label}
    </span>
  );
}
