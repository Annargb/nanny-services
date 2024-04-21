export const customStyles = {
  // опции
  option: (baseStyles, { isFocused, isSelected }) => {
    return {
      ...baseStyles,
      background: "#fff",
      color: isFocused || isSelected ? "#11101c" : "rgba(17, 16, 28, 0.3)",
      textwrap: "nowrap",
      cursor: "pointer",
      padding: "0",
      transition: "color 250ms linear",
    };
  },

  // поле input
  control: (baseStyles) => {
    return {
      ...baseStyles,
      backgroundColor: "#103931",
      borderRadius: "14px",
      width: "226px",
      height: "48px",
      border: "1px solid transparent",
      boxShadow: "none",
      color: "#fbfbfb",
      transition: "border-color 250ms linear",
      "&:hover": {
        borderColor: "#103931",
      },
      "&:focus": {
        borderColor: "#103931",
      },
    };
  },

  //стрелка вниз
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    display: "flex",
    justifyContent: "flex-end",
    color: "#fff",
    padding: "14px 14px 14px 0",
    "&:hover": {
      color: "#fbfbfb",
      fill: "#fbfbfb",
      cursor: "pointer",
    },
    "&:focus": {
      color: "#fbfbfb",
      fill: "#fbfbfb",
    },
  }),

  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "14px 0 14px 18px",
  }),

  //выпадающее меню
  menu: (baseStyles) => {
    return {
      ...baseStyles,
      maxWidth: "226px",
      background: "#fff",
      borderRadius: "14px",
      margin: "8px 0 0 0",
      boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
      cursor: "pointer",
      padding: "0",
    };
  },

  //список выпадающего меню (длина выпадайки)
  menuList: (baseStyles) => {
    return {
      ...baseStyles,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "226px",
      maxHeight: "244px",
      borderRadius: "14px",
      overflow: "hidden",
      padding: "14px 18px 18px 18px",
    };
  },

  //разделитель в инпуте поля ввода и кнопки стрелка вниз
  indicatorSeparator: (baseStyles) => {
    return {
      ...baseStyles,
      display: "none",
    };
  },

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "fff",
  }),

  singleValue: (baseStyles) => {
    return {
      ...baseStyles,
      color: "fff",
    };
  },

  // тоже поле input
  container: (baseStyles) => {
    return {
      ...baseStyles,
      display: "flex",
      alignItems: "center",
      height: "48px",
      width: "100%",
    };
  },

  //тоже поле input
  input: (baseStyles) => {
    return {
      ...baseStyles,
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1.11",
      color: "#fbfbfb",
      padding: "0",
      margin: "0",
    };
  },
};
