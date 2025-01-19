import { MouseEventHandler } from "react";

export interface FieldEntryProps {
  title: string;
  placeholder?: string;
  labelStyle?: string;
  inputStyle?: string;
  entryType: "password" | "text";
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface FuelProps {
  title: string;
  value: string;
}

export interface FooterLinkProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface YearsOfProductionProps extends Omit<FuelProps, "title"> {
  year: string;
}
