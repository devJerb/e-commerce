import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    section: {
      height: "100vh",
      position: "relative",
    },
    content: {
      height: "100%",
      zIndex: 100,
      position: "relative",
    },
    container: {
      height: "100%",
    },
    overlay: {
      backgroundColor: "rgba(255,255,255, 0.8)",
      height: "100%",
      width: "100%",
      position: "absolute",
      zIndex: 2,
    },
    heroImage: {
      height: "100%",
      width: "100%",
      zIndex: 1,
    },
    domain: {
      color: "#f50057"
    }
}));