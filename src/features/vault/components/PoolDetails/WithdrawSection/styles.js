import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  sliderDetailContainer: {
    padding: '24px 30px',
  },
  showDetailLeft: {
    float: 'left',
    marginBottom: '10px',
    fontSize: '1rem',
    lineHeight: '20px',
    color: theme.palette.text.secondary,
    fontWeight: '500',
  },
  showDetailButtonCon: {
    display: 'flex',
    justifyContent: 'space-around',
    '& + &': {
      marginLeft: '5px',
    },
  },
  showDetailButton: {
    margin: '12px 5px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    width: '160px',
  },
  showDetailButtonOutlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    color: primaryColor[0],
    '&:hover': {
      '& .MuiButton-label': {
        color: 'white',
      },
    },
    '& .MuiTouchRipple-root span': {
      backgroundColor: primaryColor[0],
    },
  },
  showDetailButtonContained: {
    backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },
  numericInput: {
    color: primaryColor[0],
  },
  balanceMax: {
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    borderBottom: '1px dashed',
  },
  zapNote: {
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  zapFormControl: {
    minWidth: 'auto',
  },
  zapSelect: {
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    paddingLeft: '10px',
    '& > div': {
      padding: '6px 0',
    },
    '&::before': {
      content: 'none',
    },
    '&::after': {
      content: 'none',
    },
  },
});

export default styles;
