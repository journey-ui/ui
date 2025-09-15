import { X } from "@untitled-ui/icons-react";
import { Typography } from "../ui/typography";
import { cn } from "@/lib/utils";

export type Filter = { [key: string]: string | string[] | object | undefined };

interface FilterDisplayProps {
  filterKey: string;
  appliedFilters: string[];
  filters: Array<{ label: string; value: string }>;
  handleFilter: (filter: Filter, keepPage?: boolean) => void;
}

const FilterDisplay = ({ filterKey, appliedFilters, filters, handleFilter }: FilterDisplayProps) => {
  const handleRemoveFilter = (filterValue: string) => {
    const newFilters = appliedFilters?.filter((item) => item !== filterValue);
    handleFilter({ [filterKey]: newFilters?.length > 0 ? newFilters?.join(',') : undefined }, false);
  };

  if (appliedFilters?.length > 0) {
    return (
      <div className="flex gap-2 items-center">
        <Typography variant="p2">Filtros selecionados:</Typography>
        {appliedFilters.map((filter) => (
          <div
            key={`filter-${filterKey}-${filter}`}
            className={cn("flex items-center gap-2 border border-primary-2 rounded-full pl-2 bg-primary-1 text-grey-5")}
          >
            {filters.find((item) => item.value === filter)?.label}
            <button
              type="button"
              className="p-1 border-l border-primary-2"
              aria-label="Remover filtro"
              onClick={() => handleRemoveFilter(filter)}
            >
              <X className="size-4 stroke-primary text-primary" aria-label="Remover filtro"/>
            </button>
          </div>
        ))}
      </div>)
  }

  return (<></>)
}

export { FilterDisplay };