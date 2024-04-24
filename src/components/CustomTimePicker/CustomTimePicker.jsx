import { useEffect, useRef, useState } from "react";
import * as n from "./CustomTimePicker.styled";
import icons from "../../images/icons.svg";

export const CustomTimePicker = (name) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("00:00");
  const [scrollPosition, setScrollPosition] = useState(0);
  const optionWrapperRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(optionWrapperRef.current.scrollTop);
  };

  useEffect(() => {
    if (isOpen && optionWrapperRef.current) {
      optionWrapperRef.current.scrollTop = scrollPosition;
    }
  }, [isOpen, scrollPosition]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (
      optionWrapperRef.current &&
      !optionWrapperRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
          <n.OptionWrapper ref={optionWrapperRef} onScroll={handleScroll}>
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
