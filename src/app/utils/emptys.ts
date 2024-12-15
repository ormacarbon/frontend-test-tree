import { icons } from "../assets/icons";
import { dataMessage, optionDefault } from "./types";

export const emptyDataMessage: dataMessage = {
  show: false,
  loading: false,
  icon: icons.plant,
  status: "success",
  title: "Lorem Ipsum",
  textButton: "Lorem Ipsum",
  subTitle: "What is Lorem Ipsum",
  message: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  ],
};

export const emptyDatacredOptions: optionDefault[] = [
  {
    amout: 57,
    value: "1",
    label: "R$: 57,00",
    createdAt: "2024-12-05T09:38:44.601Z",
    updatedAt: "2024-10-19T18:14:15.130Z",
  },
];