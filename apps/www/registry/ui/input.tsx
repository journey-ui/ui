import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.JSX.Element;
  rightElement?: React.ReactNode;
  inputClassName?: string;
  placeholder?: string;
  showClearButton?: boolean;
  onClickClearButton?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      icon,
      rightElement,
      placeholder,
      value,
      inputClassName,
      disabled,
      onClickClearButton,
      showClearButton: showClearButtonProp = true,
      ...props
    },
    ref
  ) => {
    const hasValue =
      (typeof value === "string" && value.length > 0) ||
      (typeof ref === "object" && ref?.current?.value);
    const showClearButton = !!hasValue && !disabled && showClearButtonProp;

    return (
      <label
        className={cn(
          "cursor-text h-[46px] bg-grey-1 text-grey-5 flex items-center gap-3 pl-[18px] pr-2.5 py-2.5 rounded-full transition-colors relative border border-grey-5 ",
          disabled
            ? "bg-grey-3 border-grey-4 text-grey-4 cursor-not-allowed "
            : "hover:border-primary focus-within:border-primary focus-visible:border-primary",
          className
        )}
      >
        <div className="flex items-center justify-center w-full gap-3 stroke-gray">
          {icon && (
            <div className="flex items-center justify-center size-6 [&>svg]:size-5">
              {icon}
            </div>
          )}
          <input
            type={type}
            value={value}
            aria-label="Pesquisar"
             placeholder={
          placeholder ?? "Pesquise por Documento, TOTVS Code, Nome do Cliente"
        }
            disabled={disabled}
            className={cn(
              "outline-none flex w-full rounded-md bg-background text-base leading-6 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-5 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-lighter truncate placeholder:truncate",
              disabled && "placeholder:text-grey-4 cursor-not-allowed",
              inputClassName
            )}
            ref={ref}
            {...props}
          />

          {showClearButton && (
            <button
              type="button"
              className="size-6 cursor-pointer"
              onClick={onClickClearButton}
            >
              <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                <X size={13} className="text-white" strokeWidth={4} />
              </div>
            </button>
          )}
        </div>
      </label>
    );
  }
);

Input.displayName = "Input";

export { Input };
