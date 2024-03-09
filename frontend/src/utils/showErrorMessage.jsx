import { enqueueSnackbar } from "notistack";

// eslint-disable-next-line react-refresh/only-export-components
export default (error) =>
    enqueueSnackbar(error.response.data.error, { variant: "error" });