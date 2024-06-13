import { IconSurface } from "../../components/Legend/IconSurface";
import { ItemText } from "../../components/Legend/ItemText";
import { Icon } from "../../components/Legend/Icon";
import { Item } from "../../components/Legend/Item";
import { Legend } from "../../components/Legend";

export const renderLegend = (props) => {
  const { formatter, iconSize, payload, layout, align } = props;

  const textAlign = layout === "vertical" ? "left" : align;

  const display = layout === "horizontal" ? "inline-block" : "block";

  return (
    <>
      <Legend textAlign={textAlign}>
        {payload.map((entry, index) => {
          const { value, color, type } = entry;

          const text =
            typeof formatter === "function"
              ? formatter(value, entry, index)
              : value;

          return (
            <Item display={display} index={index} key={index}>
              <IconSurface size={iconSize}>
                <Icon color={color} type={type}></Icon>
              </IconSurface>
              <ItemText color={color}>{text}</ItemText>
            </Item>
          );
        })}
      </Legend>
    </>
  );
};
