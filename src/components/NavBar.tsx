import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/7.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
