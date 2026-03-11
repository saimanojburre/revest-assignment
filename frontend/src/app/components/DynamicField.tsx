import {
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  FormLabel
} from "@mui/material";

import { UseFormRegister } from "react-hook-form";

type Field = {
  id: number;
  name: string;
  fieldType: string;
  required?: boolean;
  listOfValues1?: string[];
};

type Props = {
  field: Field;
  register: UseFormRegister<any>;
};

export default function DynamicField({ field, register }: Props) {

  if (field.fieldType === "TEXT") {
    return (
      <TextField
        label={field.name}
        fullWidth
        variant="outlined"
        sx={{
          input: { color: "white" },
          label: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" }
          }
        }}
        {...register(field.name, { required: field.required })}
      />
    );
  }

  if (field.fieldType === "LIST") {
    return (
      <FormControl fullWidth>
        <InputLabel sx={{ color: "white" }}>
          {field.name}
        </InputLabel>

        <Select
          defaultValue=""
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white"
            },
            "& .MuiSvgIcon-root": {
              color: "white"
            }
          }}
          {...register(field.name)}
        >
          {field.listOfValues1?.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
if (field.fieldType === "RADIO") {
  return (
    <FormControl>

      <FormLabel sx={{ color: "white", marginBottom: "5px" }}>
        {field.name}
      </FormLabel>

      <RadioGroup>

        {field.listOfValues1?.map((value) => (
          <FormControlLabel
            key={value}
            value={value}
            control={
              <Radio
                sx={{ color: "white" }}
                {...register(field.name)}
              />
            }
            label={value}
            sx={{ color: "white" }}
          />
        ))}

      </RadioGroup>

    </FormControl>
  );
}

  return null;
}