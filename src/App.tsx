import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function App() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <main>
      <h1>Kine</h1>
      <div>
        Title: <input type="text" />
      </div>
      <div>
      Title-En: <input type="text" />
      </div>
      <br />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div>
        Transcript De: <textarea></textarea>
      </div>
      <div>
        Transcript En: <textarea></textarea>
      </div>
      <div>
        Cover:
        <input type="file" />
      </div>
      <div>
        Subtitles De:
        <input type="file" />
      </div>
      <div>
        Subtitles En:
        <input type="file" />
      </div>
    </main>
  );
}

export default App;
