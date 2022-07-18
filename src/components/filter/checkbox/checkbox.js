import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { createStyles, RangeSlider, Checkbox } from "@mantine/core";
import { Point, GripVertical } from "tabler-icons-react";
const CheckboxFilter = ({ seeProducts, getProductById }) => {
  const [angilal, setAngilal] = useState([]);
  const [brand, setBrand] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const useStyles = createStyles((theme) => ({
    mark: {
      display: "none",
    },

    markWrapper: {
      marginTop: 12,
    },

    thumb: {
      width: 16,
      height: 24,
      backgroundColor: theme.white,
      color: theme.colors.gray[5],
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[3]
      }`,
    },
  }));
  const { classes } = useStyles();

  useEffect(() => {
    axios
      .get("/subangilal")
      .then((response) => {
        const data = response.data.data;
        setAngilal(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshKey]);

  useEffect(() => {
    axios
      .get("/brand")
      .then((response) => {
        const data = response.data.data;
        setBrand(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshKey]);

  return (
    <div>
      <h2 class="mt-[2px]">Ангилал</h2>
      <hr />
      {angilal.map((item) => (
        <div className="flex items-center mr-4 mt-[10px]" key={item.key}>
          <Checkbox
            color="red"
            radius="xs"
            onClick={() => getProductById(item._id)}
          />
          <label
            htmlFor="red-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {item.name}
          </label>
        </div>
      ))}

      <div class="pt-[5px]">
        <hr />
        <h2>Брэнд</h2>
        <div class="pt-[10px]">
          {brand.map((brand) => (
            <div className="flex items-center mr-4 mt-[10px]" key={brand.key}>
              <Checkbox color="red" radius="xs" />

              <label
                htmlFor="red-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div class="pt-[15px]">
        <hr />
        <h2 class="pt-[10px]">Үнэ</h2>
        <RangeSlider
          mt="xl"
          mb="xl"
          classNames={classes}
          color="red"
          size={2}
          defaultValue={[30, 60]}
          thumbChildren={<GripVertical />}
          marks={[
            { value: 0 },
            { value: 12.5 },
            { value: 25 },
            { value: 37.5 },
            { value: 50 },
            { value: 62.5 },
            { value: 75 },
            { value: 87.5 },
            { value: 100 },
          ]}
        />
      </div>
    </div>
  );
};

export default CheckboxFilter;
