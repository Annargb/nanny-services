import { useState } from "react";
import * as n from "./CustomTimePicker.styled";
import icons from "../../images/icons.svg";

export const CustomTimePicker = (name) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("00:00");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
  };

  return (
    <n.Container>
      <n.Field
        name={name}
        type="text"
        value={selectedTime}
        readOnly
        onClick={toggleDropdown}
        placeholder="00:00"
      />
      <n.ClockIcon>
        <use href={`${icons}#clock`} />
      </n.ClockIcon>
      {isOpen && (
        <n.Dropdown>
          <n.Title>Meeting time</n.Title>
          <n.OptionWrapper>
            {[...Array(48)].map((_, index) => {
              const hours = Math.floor(index / 2);
              const minutes = index % 2 === 0 ? "00" : "30";
              const time = `${hours.toString().padStart(2, "0")}:${minutes}`;
              return (
                <n.Option
                  key={index}
                  onClick={() => handleSelectTime(time)}
                  className={selectedTime === time ? "selected" : ""}
                >
                  <n.TimeRight>{hours.toString().padStart(2, "0")}</n.TimeRight>
                  <span>:</span>
                  <n.TimeLeft>{minutes}</n.TimeLeft>
                </n.Option>
              );
            })}
          </n.OptionWrapper>
        </n.Dropdown>
      )}
    </n.Container>
  );
};

// import { useState } from "react";
// import * as n from "./CustomTimePicker.styled";

// export const CustomTimePicker = () => {
//   const [time, setTime] = useState("10:00");

//   return (
//     <n.StyledTimePicker
//       onChange={setTime}
//       value={time}
//       format="HH:mm"
//       minTime="00:00"
//       maxTime="23:30"
//       disableClock={true}
//       clearIcon={null}
//     />
//   );
// };
