import { getAge } from "../../operations/operations";
import * as n from "./NannyDetails.styled";

export const NannyDetails = ({ nanny }) => {
  return (
    <n.List>
      <n.ListItem>
        <n.ListTitle>
          Age:{" "}
          <n.ListSubText
            style={{
              textDecoration: "underline",
              textDecorationSkipInk: "none",
            }}
          >
            {getAge(nanny.birthday)}
          </n.ListSubText>
        </n.ListTitle>
      </n.ListItem>
      <n.ListItem>
        <n.ListTitle>
          Experience: <n.ListSubText>{nanny.experience}</n.ListSubText>
        </n.ListTitle>
      </n.ListItem>
      <n.ListItem>
        <n.ListTitle>
          Kids Age: <n.ListSubText>{nanny.kids_age}</n.ListSubText>
        </n.ListTitle>
      </n.ListItem>
      <n.ListItem>
        <n.ListTitle>
          Characters:{" "}
          <n.ListSubText>
            {nanny.characters
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(", ")}
          </n.ListSubText>
        </n.ListTitle>
      </n.ListItem>
      <n.ListItem>
        <n.ListTitle>
          Education: <n.ListSubText>{nanny.education}</n.ListSubText>
        </n.ListTitle>
      </n.ListItem>
    </n.List>
  );
};
