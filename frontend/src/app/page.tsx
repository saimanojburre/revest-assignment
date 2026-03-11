"use client";

import { useForm } from "react-hook-form";
import schema from "./formSchema.json";
import { Container, Stack, Button, Typography } from "@mui/material";
import DynamicField from "./components/DynamicField";

export default function Home() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    localStorage.setItem("formData", JSON.stringify(data));
    alert("Form Saved!");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Typography variant="h4" gutterBottom>
        Signup Form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>

          {schema.data.map((field: any) => (
            <DynamicField
              key={field.id}
              field={field}
              register={register}
            />
          ))}

          <Button variant="contained" type="submit">
            Submit
          </Button>

        </Stack>
      </form>
    </Container>
  );
}