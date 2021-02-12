import React from "react";
import hero from "./assets/3.svg";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  Switch,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="box">
      <div className="box-primary">
        <img src={hero} height="300px" alt="" />
      </div>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1) TextField */}
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="firstName"
            inputRef={register({
              required: "First name is required"
            })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />

          {/* 2) TextField */}
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="lastName"
            inputRef={register({
              required: "Last Name is reuqired"
            })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />

          {/* 3) TextField */}
          <TextField
            placeholder="Enter Your E-mail Address"
            label="E-mail"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="email"
            inputRef={register({
              required: "email is required"
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />

          {/* 4) TextField */}
          <TextField
            placeholder="Enter Your Phone Number"
            label="Phone"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="phone"
            inputRef={register({
              required: "Phone number is reuqired"
            })}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* 5) Date Picker */}
            <Controller
              render={(props) => (

                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Date of Admission"
                  value={props.value}
                  onChange={props.onChange}
                  fullWidth
                  error={Boolean(errors.date_of_admission)}
                  helperText={errors.date_of_admission?.message}
                />
              )}
              name="date_of_admission"
              defaultValue={null}
              control={control}
              rules={{
                required: "Date of Addmission is required"
              }}
            />

            {/* 4) Time Picker */}
            <Controller
              render={(props) => (
                <KeyboardTimePicker
                  margin="normal"
                  label="Time of Admission"
                  value={props.value}
                  onChange={props.onChange}
                  fullWidth
                  error={Boolean(errors.time_of_admission)}
                  helperText={errors.time_of_admission?.message}
                />
              )}
              name="time_of_admission"
              defaultValue={null}
              control={control}
              rules={{
                required: "Time of Admission is required"
              }}
            />

          </MuiPickersUtilsProvider>

          {/* Radio Buttons */}
          <FormControl className={classes.inputField} error={true}>
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={<Radio inputRef={register({
                  required: "Choose Your Gender"
                })} />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio inputRef={register({
                required: "Choose Your Gender"
              })} />} label="Male" />
              <FormControlLabel value="other" control={<Radio inputRef={register({
                required: "Choose Your Gender"
              })} />} label="Other" />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>

          {/* Select */}
          <FormControl fullWidth className={classes.inputField} error={Boolean(errors.course)}>
            <InputLabel id="demo-simple-select-label">
              Select Your Course
          </InputLabel>
            {/* <Controller
              as={
                <Select>
                  <MenuItem value="">Choose your course</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>
              }
              name="course"
              control={control}
              defaultValue=""
            /> */}
            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="">Choose your course</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>

              )}

              name="course"
              control={control}
              defaultValue=""
              rules={{
                required: "Please Choose Your Course"
              }}
            />
            <FormHelperText>{errors.course?.message}</FormHelperText>
          </FormControl>

          {/*  Switch */}
          <FormControlLabel
            className={classes.inputField}
            control={<Switch name="notification" inputRef={register} />}
            label="Send me regular updates"
          />

          {/* Checkbox */}
          <FormControl error={Boolean(errors.tnc)}>
            <FormControlLabel
              style={{ display: "block", marginBottom: 15 }}
              control={<Checkbox name="tnc" inputRef={register({
                required: "please Agree Our terms and condtion"
              })} />}
              label="I aggree all terms and conditions"
            />
          </FormControl>
          <FormHelperText>{errors.tnc?.message}</FormHelperText>

          <Button variant="contained" color="primary" type="submit">
            create new account
        </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
