const width = '700px';

export default theme => ({
  paper: {
    borderRadius: '5px',
    position: 'fixed',
    top: '20%',
    outline: 'none',
  },
  dialogContent: {
    padding: '30px',
  },
 dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
  addressResultContainer: {
    width,
    paddingBottom: '5px',
  },
  sendFundsContainer: {
    width,
    padding: '15px 30px 30px 30px',
  },
  line: {
    border: `0.5px solid ${theme.colors.lightGray}`,
    marginBottom: '15px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  list:{
    fontSize: '16px',
    borderBottom: `0.5px solid ${theme.colors.lightGray}`,
  },
  title: {
    fontWeight: theme.fonts.weight.bold,
    fontSize: theme.fonts.size.inputTitle,
  },
  maintitle: {
    fontWeight: theme.fonts.weight.bold,
    fontSize: '35px',
    borderBottom: `0.5px solid ${theme.colors.lightGray}`,
  },
  duration: {
    width: '150px',
  },
  currency: {
    width: '150px',
  },
  fullWidth: {
    width: '100%',
  },
  txId: {
    fontSize: '16px',
  },
  avatar: {
    height:30, width:30,
  },
  button: {
    width: '100%',
    backgroundColor: theme.colors.blue,
    '&:hover': {
      backgroundColor: theme.colors.lightBlue,
    },
  },
  buttonDisabled: {
    width: '100%',
    backgroundColor: theme.colors.lightBlue,
  },
  buttonText: {
    color: theme.colors.white,
  },
  waiting: {
    fontWeight: theme.fonts.weight.light,
    fontSize: theme.fonts.size.inputTitle,
    color: theme.colors.gray,
    position: 'relative',
    float: 'right',
  },
  progress: {
    marginLeft: '10px',
    color: theme.colors.gray,
  },
    root: {
    backgroundColor: theme.palette.background.paper,
  },
});
