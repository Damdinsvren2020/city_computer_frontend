import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { createStyles, RangeSlider, Checkbox } from "@mantine/core";
import { Point, GripVertical } from "tabler-icons-react";
const CheckboxFilter = ({ seeProducts, subAngilals, getProductById, getProductByBrand, product, minMaxProducts }) => {
  const [angilal, setAngilal] = useState(subAngilals);
  const [brand, setBrand] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [currentIndex, setCurrentIndex] = useState('')

  console.log(subAngilals, "dsjajdajsdjajsjjajajajajajja")


  const marks = [
    { value: min, label: min },
    { value: max, label: max }
  ];

  useEffect(() => {
    if (product) {
      minMAXValue()
    }
  }, [product])

  function minMAXValue() {
    let array = [];
    product?.forEach(element => {
      if (element.price) {
        array.push(element.price)
      }
    });
    setMin(Math.min(...array))
    setMax(Math.max(...array))
  }

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
      border: `1px solid ${theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[3]
        }`,
    },
  }));
  const { classes } = useStyles();

  // useEffect(() => {
  //   axios
  //     .get("/subangilal")
  //     .then((response) => {
  //       const data = response.data.data;
  //       setAngilal(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [refreshKey]);

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
    <div className="w-[180px]">
      <h2 class="mt-[2px]">Ангилал</h2>
      <hr />
      {subAngilals?.SubAngilal?.map((item) => (
        <div className="flex items-center mr-4 mt-[10px]" key={item.key}>
          <Checkbox
            checked={currentIndex === item.name ? true : false}
            color="red"
            radius="xs"
            onClick={() => {
              getProductById(item._id)
              setCurrentIndex(item.name)
            }}
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
              <Checkbox
                checked={currentIndex === brand.name ? true : false}
                onClick={() => {
                  getProductByBrand(brand._id)
                  setCurrentIndex(brand.name)
                }}
                color="red" radius="xs" />

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
        <h2 class="pt-[10px]">Үнэ </h2>
        <div className="w-5/6 mx-auto">
          <RangeSlider
            mt="xl"
            mb="xl"
            classNames={classes}
            color="red"
            size={3}
            defaultValue={[min, max]}
            thumbChildren={<GripVertical />}
            marks={marks}
            onChangeEnd={((value) => minMaxProducts(value))}
            min={min}
            max={max}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxFilter;
