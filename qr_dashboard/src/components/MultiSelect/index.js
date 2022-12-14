import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: '100%'
    // maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export default function MultipleSelect({
  data,
  setSelectedBranches,
  selectedBranches
}) {
  const classes = useStyles();
  // const [selected, setSelected] = React.useState([]);

  const handleChange = event => {
    setSelectedBranches(event.target.value);
  };
  return (
    <div>
      <FormControl
        className={classes.formControl}
        style={{ border: '1px soild black' }}>
        <InputLabel id="demo-mutiple-chip-label">branches</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selectedBranches}
          onChange={handleChange}
          input={<Input />}
          renderValue={selectedBranches => selectedBranches.map(item => item.title).join(', ')}
          MenuProps={MenuProps}>
          {data.map(option => (
            <MenuItem key={option.id} value={option}>
              <Checkbox
                checked={
                  selectedBranches.find(item => item.id === option.id) ? true : false
                }
              />
              <ListItemText primary={option.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
