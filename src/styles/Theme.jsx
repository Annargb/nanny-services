export const theme = {
  colors: {
    white: "#fbfbfb",
    green: "#103931",
    black: "#11101c",
    borderColor: "rgba(251, 251, 251, 0.4)",
    textGrayColor: "rgba(17, 16, 28, 0.5)",
    gradientColor: "rgba(18, 20, 23, 0.6)",

    modalOverlay: "rgba(4, 4, 4, 0.4)",

    darkGrayColor: "#303030",

    // accent colors
    accentColor: "rgba(239, 237, 232, 0.3)",
    hoverColor: "#e6533c",
    successtColor: "#3cbf61",
    errorColor: "#d80027",
  },

  radii: {
    sd: "4px",
    ld: "12px",
  },

  spacing: (value) => `${value * 4}px`,

  transition: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
};
