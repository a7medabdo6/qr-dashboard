import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import './style.css';
import { Page } from 'components';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import first_layout_image from '../../assets/images/first_layout.jpg';
import second_layout_image from '../../assets/images/secon_layout.png';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
export default function ToggleButtonSizes() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('First');
  const [valueOfRadio, setvalueOfRadio] = React.useState('First');

  const handleChange = (event, radio) => {
    setvalueOfRadio(radio);
  };
  const EditToggleButton = styled(ToggleButton)(() => ({
    margin: '30px',
    borderLeft: ' 1px solid rgba(0, 0, 0, 0.12)',
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: 'rgb(57, 52, 134)'
    }
  }));

  const control = {
    value: valueOfRadio,
    onChange: handleChange,
    exclusive: true
  };

  const handleChangeRadio = event => {
    setvalueOfRadio(event.target.value);
  };
  return (
    <Page className={classes.root} title="Calendar">
      <div className={classes.main}>
        <Typography style={{ marginInline: '30px' }} variant="h5">
          Menu Style
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // TODO Replace with Stack
            '& > :not(style) + :not(style)': { mt: 2 }
          }}>
          <ToggleButtonGroup size="large" {...control}>
            <EditToggleButton
              value="First"
              style={{ width: '50%', height: 'auto', border: '1px solid' }}
              key="First">
              <img src={first_layout_image} className={classes.card} />
            </EditToggleButton>
            ,
            <EditToggleButton
              value="Second"
              style={{ width: '50%', height: 'auto', border: '1px solid' }}
              key="Second">
              <img src={second_layout_image} className={classes.card} />
            </EditToggleButton>
            ,
          </ToggleButtonGroup>
          <FormControl style={{ width: '100%' }}>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={valueOfRadio}
              onChange={handleChangeRadio}>
              <div className={classes.radio}>
                <FormControlLabel
                  value="First"
                  control={<Radio />}
                  label="First"
                />
              </div>
              <div className={classes.radio}>
                <FormControlLabel
                  value="Second"
                  control={<Radio />}
                  label="Second"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </Box>
      </div>
    </Page>
  );
}
