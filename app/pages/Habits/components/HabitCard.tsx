import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { defaultColor } from "@/colors";

const HabitCard = () => {
  return (
    <div className="flex p-3 items-center justify-between">
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          color: defaultColor.default,
          "&.Mui-checked": {
            color: defaultColor.default,
          },
        }}
      />

      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 border">
        <div className="w-full">
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className="p-3 rounded-full w-4 h-4 bg-blue-500 text-white"
                height={20}
                width={20}
                icon={faCode}
              />
              <span>Coding</span>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-white text-[12px] rounded-md px-2"
            >
              <span className="text-blue-500">Area1</span>
            </div>
            <div
              style={{ backgroundColor: defaultColor[100] }}
              className="p-1 text-white text-[12px] rounded-md px-2"
            >
              <span className="text-blue-500">Area1</span>
            </div>
          </div>
        </div>

        <div className="w-10 flex items-center justify-center">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
