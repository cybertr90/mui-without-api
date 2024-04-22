import { TextFieldPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

export type TextFieldColor =  OverridableStringUnion<
'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
TextFieldPropsColorOverrides
>;