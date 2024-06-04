import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Tab,
  Typography,
  Select,
  TextField,
  OutlinedInput,
  Tooltip
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BlankCard from '../../shared/BlankCard';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import { IconEye, IconEyeOff } from '@tabler/icons';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const countries = [
  { value: 'IN', label: 'India' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'SL', label: 'Sri Lanka' },
];

const initialState = {
  family_name: '',
  email: '',
  given_name: '',
  birth_date: '',
  age_over_18: '',
  age_over_NN: '',
  given_name_birth: '',
  birth_city: '',
  gender: '',
  issuance_date: '',
  age_in_years: '',
  age_birth_years: '',
  family_name_birth: '',
  birth_country: '',
  birth_state: '',
  birth_place: '',
  expiry_date: '',
  resident_address: '',
  resident_country: '',
  resident_state: '',
  resident_city: '',
  resident_postal_code: '',
  resident_street: '',
  resident_house_number: '',
  document_number: '',
  administrative_number: '',
  issuing_jurisdiction: '',
  issuing_country: ''
};

const FormTabs = () => {
  const [value, setValue] = useState('1');
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (id) => (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: event.target.value,
    }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => event.preventDefault();

  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim() !== '');
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form Submitted', formData);
  };

  return (
    <div>
      <Typography variant="h2" mb={2} mt={2}>
        KYC Form
      </Typography>
      <BlankCard>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: (theme) => theme.palette.divider }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" scrollButtons="auto">
              <Tab label="Personal Info" value="1" />
              <Tab label="Address Details" value="2" />
              <Tab label="Document Details" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <CustomFormLabel htmlFor="family_name" className="center">
                  Family Name
                  <Tooltip title="Current last name(s) or surname(s) of the PID User." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="family_name" placeholder="Doe" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="email" className="center">
                  Email
                  <Tooltip title="User Email" placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="email" placeholder="user@gmail.com" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="given_name" sx={{ mt: 2 }} className="center">
                  Given Name
                  <Tooltip title="Current first name(s), including middle name(s), of the PID User." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="given_name" placeholder="John" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="birth_date" sx={{ mt: 2 }} className="center">
                  Birth Date
                  <Tooltip title="Day, month, and year on which the PID User was born." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField type="date" id="birth_date" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="age_over_18" sx={{ mt: 2 }} className="center">
                  Age Over 18
                  <Tooltip title="Attesting whether the PID User is currently an adult (true) or a minor (false)." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <Select id="age_over_18" fullWidth onChange={handleSelectChange('age_over_18')} value={formData.age_over_18}>
                  <MenuItem value="true">True</MenuItem>
                  <MenuItem value="false">False</MenuItem>
                </Select>
                <CustomFormLabel htmlFor="age_over_NN" sx={{ mt: 2 }} className="center">
                  Age Over NN
                  <Tooltip title="Additional current age attestations, NN < 18." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <Select id="age_over_NN" fullWidth onChange={handleSelectChange('age_over_NN')} value={formData.age_over_NN}>
                  <MenuItem value="true">True</MenuItem>
                  <MenuItem value="false">False</MenuItem>
                </Select>

                <CustomFormLabel htmlFor="given_name_birth" sx={{ mt: 2 }} className="center">
                  Given Birth Name
                  <Tooltip title="First name(s), including middle name(s), of the PID User at the time of birth." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="given_name_birth" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="birth_city" sx={{ mt: 2 }} className="center">
                  Birth City
                  <Tooltip title="The municipality, city, town, or village where the PID User was born." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="birth_city" fullWidth onChange={handleInputChange} />

              </Grid>
              <Grid item xs={12} lg={6}>
                <CustomFormLabel htmlFor="age_in_years" className="center">
                  Age in Years
                  <Tooltip title="The current age of the PID User in years." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="age_in_years" placeholder="30" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="age_birth_years" className="center">
                  Age Birth Years
                  <Tooltip title="The year when the PID User was born." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="age_birth_years" placeholder="0" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="family_name_birth" className="center">
                  Family Name Birth
                  <Tooltip title="Last name(s) or surname(s) of the PID User at the time of birth." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="family_name_birth" placeholder="John" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="birth_country" className="center">
                  Birth Country
                  <Tooltip title="The country where the PID User was born, as an Alpha-2 country code as specified in ISO 3166-1." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="birth_country" placeholder="USA" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="birth_state" className="center">
                  Birth State
                  <Tooltip title="The state, province, district, or local area where the PID User was born." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="birth_state" placeholder="" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="birth_place" sx={{ mt: 2 }} className="center">
                  Birth Place
                  <Tooltip title="The country, state, and city where the PID User was born." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="birth_place" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="gender" sx={{ mt: 2 }} className="center">
                  Gender
                  <Tooltip title="PID User's gender, using a value as defined in ISO/IEC 5218." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <Select id="gender" fullWidth onChange={handleSelectChange('gender')} value={formData.gender}>
                  <MenuItem value="0">Not known</MenuItem>
                  <MenuItem value="1">Male</MenuItem>
                  <MenuItem value="2">Female</MenuItem>
                  <MenuItem value="9">Not applicable</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <CustomFormLabel htmlFor="resident_address" className="center">
                  Resident Address
                  <Tooltip title="The full address of the place where the PID User currently resides and/or can be contacted (street name, house number, city etc.)." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="resident_address" placeholder="123 Main St" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="resident_country" sx={{ mt: 2 }} className="center">
                  Resident Country
                  <Tooltip title="The country where the PID User currently resides, as an Alpha-2 country code as specified in ISO 3166-1." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <Select id="resident_country" fullWidth onChange={handleSelectChange('resident_country')} value={formData.resident_country}>
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>

                <CustomFormLabel htmlFor="resident_state" sx={{ mt: 2 }} className="center">
                  Resident State
                  <Tooltip title="The state, province, district, or local area where the PID User currently resides." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="resident_state" placeholder="California" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="resident_city" sx={{ mt: 2 }} className="center">
                  Resident City
                  <Tooltip title="The municipality, city, town, or village where the PID User currently resides." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="resident_city" placeholder="Los Angeles" fullWidth onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CustomFormLabel htmlFor="resident_postal_code" className="center">
                  Resident Postal Code
                  <Tooltip title="Postal code of the place where the PID User currently resides." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="resident_postal_code" placeholder="90001" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="resident_street" sx={{ mt: 2 }} className="center">
                  Resident Street
                  <Tooltip title="The name of the street where the PID User currently resides." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="resident_street" placeholder="Main St" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="resident_house_number" sx={{ mt: 2 }} className="center">
                  House Number
                  <Tooltip title="The house number where the PID User currently resides, including any affix or suffix." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="resident_house_number" placeholder="123" fullWidth onChange={handleInputChange} />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="3">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <CustomFormLabel htmlFor="document_number" className="center">
                  Document Number
                  <Tooltip title="A number for the PID, assigned by the PID Provider." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="document_number" placeholder="A1234567" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="administrative_number" className="center">
                  Administrative Number
                  <Tooltip title="A number assigned by the PID Provider for audit control or other purposes." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="administrative_number" placeholder="A1234567" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="issuance_date" className="center">
                  Personal ID Issue Date
                  <Tooltip title="Date (and possibly time) when the PID was issued." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField type="date" id="issuance_date" placeholder="" fullWidth onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CustomFormLabel htmlFor="issuing_jurisdiction" className="center">
                  Issuing Jurisdiction
                  <Tooltip title="Country subdivision code of the jurisdiction that issued the PID, as defined in ISO 3166-2:2020, Clause 8. The first part of the code SHALL be the same as the value for issuing_country." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <TextField id="issuing_jurisdiction" placeholder="Government Jurisdiction" fullWidth onChange={handleInputChange} />

                <CustomFormLabel htmlFor="issuing_country" sx={{ mt: 2 }} className="center">
                  Issuing Country
                  <Tooltip title="Alpha-2 country code, as defined in ISO 3166-1, of the PID Provider's country or territory." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <Select id="issuing_country" fullWidth onChange={handleSelectChange('issuing_country')} value={formData.issuing_country}>
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <CustomFormLabel htmlFor="expiry_date" className="center">
                  Personal ID Expiry Date
                  <Tooltip title="Date (and possibly time) when the PID will expire." placement="top" cursor="pointer">
                    <ErrorOutlineIcon />
                  </Tooltip>
                </CustomFormLabel>
                <OutlinedInput type="date" id="expiry_date" placeholder="" fullWidth onChange={handleInputChange} />
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </BlankCard>
      <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3} mb={5}>
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!isFormValid()}>
          Submit
        </Button>
      </Stack>
    </div>
  );
};

export default FormTabs;
