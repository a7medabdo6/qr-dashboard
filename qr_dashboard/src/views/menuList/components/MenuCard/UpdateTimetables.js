import React, { Fragment, useEffect, useState } from 'react';
import {
  TextField,
  Typography,
  Box,
  Button,
  Modal,
  CircularProgress,
  Tabs,
  Tab,
  FormControl,
  Select,
  MenuItem,
  Checkbox
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import validate from 'validate.js';

import LoaderButton from 'components/Buttons';
import { useModifyMenuHook } from 'hooks/apis/Menus';

import TabPanel from 'components/TabPanel';

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 80;
const MenuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  getContentAnchorEl: null,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 40
    }
  }
};

const schema = {
  active: {
    presence: { allowEmpty: true }
  }
};
const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #eee',
  borderRadius: '10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: '65%',

  textAlign: 'center',
  maxHeight: '80vh',
  overflow: 'auto'
};

function UpdateTimetables({
  openUpdateTimetablesModal,
  handleCloseModal,
  classes,
  Menu
}) {
  const [formState, setFormState] = useState({
    isValid: false,
    values: { active: true, order: 1 },
    touched: {},
    errors: {}
  });

  const [Timetables, setTimetables] = useState([]);

  const {
    mutate: UpdateMenuRequest,
    isLoading: isLoadingUpdate
  } = useModifyMenuHook();

  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednsday',
    'thursday',
    'friday',
    'saturday'
  ];

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  useEffect(() => {
    if (Menu) {
      const errors = validate(Menu, schema);

      setTimetables(Menu.timetables);

      setFormState({
        values: { ...Menu },
        isValid: errors ? false : true,
        errors: errors || {},
        touched: {}
      });
    }
  }, [Menu]);

  const [tab, setTab] = useState(0);
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleChangeTimetable = (event, index) => {
    event.persist();
    let newTimetables = [...Timetables];
    newTimetables[index] = {
      ...newTimetables[index],
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    };
    setTimetables(newTimetables);
  };

  const addTimetable = () => {
    let newTimetable = { active: true, branch: '' };
    setTimetables([...Timetables, newTimetable]);
  };

  const handleEditTimetables = async event => {
    event.preventDefault();
    const menu = {
      id: Menu.id,
      timetables: Timetables
    };
    await UpdateMenuRequest(menu);
    handleCloseModal();
  };

  return (
    <Modal open={openUpdateTimetablesModal} onClose={handleCloseModal}>
      <Box sx={{ ...ModalStyle }}>
        {Menu ? (
          <form onSubmit={handleEditTimetables}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4" style={{ textAlign: 'initial' }}>
                  {Menu?.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ textAlign: 'initial', marginBottom: '20px' }}>
                  {`Timetables (${Timetables?.length})`}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={addTimetable}>
                  Add Timetable
                </Button>
              </Grid>
            </Grid>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={tab}
                  onChange={handleChangeTab}
                  aria-label="Product Tabs"
                  variant="scrollable"
                  className={classes.tabs}>
                  {Timetables?.map((timetable, index) => (
                    <Tab key={index} label={`timetable ${index + 1}`} />
                  ))}
                </Tabs>
              </Box>
              {Timetables?.map((timetable, index) => (
                <TabPanel key={index} value={tab} index={index}>
                  <div className={classes.fields}>
                    <Grid container spacing={1}>
                      <Grid
                        item
                        xs={12}
                        md={2}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                        <Typography
                          color="textSecondary"
                          style={{ marginInline: '10px' }}
                          variant="h4">
                          Branch
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <FormControl fullWidth variant="outlined">
                          {/* <InputLabel>Branch</InputLabel> */}
                          <Select
                            name="branch"
                            value={timetable?.branch}
                            onChange={e => handleChangeTimetable(e, index)}
                            MenuProps={MenuProps}>
                            {Menu?.branch?.map(branch => (
                              <MenuItem key={branch.id} value={branch.id}>
                                {branch.title}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={5}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                        <Typography
                          color="textSecondary"
                          style={{ marginInline: '10px' }}
                          variant="h4">
                          Active
                        </Typography>
                        <Checkbox
                          checked={timetable?.active || false}
                          color="primary"
                          name="active"
                          type="checkbox"
                          onChange={e => handleChangeTimetable(e, index)}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={12}
                        style={{
                          height: '20px'
                        }}></Grid>

                      {days?.map((day, indexD) => (
                        <Fragment key={indexD}>
                          <Grid
                            item
                            xs={12}
                            md={2}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: timetable[`${day}_active`]
                                ? '#caead2'
                                : 'rgb(239 239 239)'
                            }}>
                            <Checkbox
                              checked={timetable[`${day}_active`] || false}
                              color="primary"
                              name={`${day}_active`}
                              id={`${day}_active`}
                              type="checkbox"
                              onChange={e => handleChangeTimetable(e, index)}
                            />
                            <label
                              htmlFor={`${day}_active`}
                              style={{
                                color: timetable[`${day}_active`]
                                  ? '#fff'
                                  : '#000'
                              }}>
                              <Typography color="textSecondary" variant="h6">
                                {day.toUpperCase()}
                              </Typography>
                            </label>
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <TextField
                              fullWidth
                              type="time"
                              disabled={
                                timetable[`${day}_active`] ? false : true
                              }
                              name={`${day}_from`}
                              onChange={e => handleChangeTimetable(e, index)}
                              value={timetable[`${day}_from`] || false}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <TextField
                              fullWidth
                              type="time"
                              disabled={
                                timetable[`${day}_active`] ? false : true
                              }
                              name={`${day}_to`}
                              onChange={e => handleChangeTimetable(e, index)}
                              value={timetable[`${day}_to`] || false}
                              variant="outlined"
                            />
                          </Grid>
                        </Fragment>
                      ))}
                    </Grid>
                  </div>
                </TabPanel>
              ))}
            </Box>
            <LoaderButton
              className={classes.submitButton}
              formState={formState}
              isLoading={isLoadingUpdate}
              title={'Save'}
            />
          </form>
        ) : (
          <CircularProgress color="primary" />
        )}
      </Box>
    </Modal>
  );
}

export default UpdateTimetables;
