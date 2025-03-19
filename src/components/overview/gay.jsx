import { Box, Typography, Grid, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useStateContext } from "../../Context";
import location from "../../images/location.png";
import { useStateContext } from "../../Context.js"; // Add the extension if necessary

const citySuggestions = [
  "Bhopal",
  "Indore",
  "Varanasi",
  "Ho Chi Minh City",
  "Ha Noi",
  "Ca Mau",
  "Hue",
  "Nha Trang",
  "Hoi An",
  "Da Nang",
  "Hanoi",
];

const autocompleteStyles = {
  root: {
    "& .MuiInput-root .MuiInput-input": {
      padding: "4px 4px 4px 0px",
      color: "white",
    },
  },
};

const Header1 = () => {
  const { thisLocation, setPlace, place, error } = useStateContext();
  const [searchCity, setSearchCity] = useState("Bangalore");

  const handleChange = (event, newValue) => {
    if (citySuggestions.includes(newValue)) {
      setSearchCity(newValue);
      setPlace(newValue);
    } else {
      setPlace("");
    }
  };

  useEffect(() => {
    if (citySuggestions.includes(searchCity)) {
      setPlace(searchCity);
    }
  }, [searchCity]);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: "10px 0 5px 0" }}
      spacing={2}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(22, 33, 62, 0.8)",
            width: "30rem",
            borderRadius: "2rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "opacity 0.3s ease-in-out",
            "&.active": {
              opacity: 1,
            },
          }}
          className={thisLocation ? "active" : ""}
        >
          <img
            src={location}
            alt="location"
            style={{ width: "50px", height: "50px" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontFamily: "Poppins",
              marginLeft: "10px",
            }}
          >
            Thành phố: {thisLocation}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={8}
        lg={9}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Autocomplete
          freeSolo
          options={citySuggestions}
          onChange={handleChange}
          value={place}
          sx={{
            width: "100%",
            maxWidth: "300px",
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            padding: "1rem",
            borderRadius: "1rem",
            fontFamily: "Poppins",
            ...autocompleteStyles.root,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Tìm kiếm thành phố"
              variant="standard"
              sx={{ color: "#ffffff", fontFamily: "Poppins" }}
            />
          )}
        />
      </Grid>
      {error && (
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Alert
              severity="error"
              variant="filled"
              sx={{ mt: 0, width: "100%", maxWidth: "25rem" }}
            >
              {error}
            </Alert>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Header1;
