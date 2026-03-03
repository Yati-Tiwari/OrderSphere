import React, { useState } from 'react'
import {
  Divider,
  Grid,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'


const categories = [
  "pizza",
  "biryani",
  "burger",
  "chicken",
  "rice"
]

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "veg" },
  { label: "Non-Vegetarian", value: "non-veg" },
  { label: "Seasonal", value: "seasonal" }
]

const RestaurantDetails = () => {

  const foodData = [
    {
      id: 1,
      name: "Burgar",
      price: 499,
      type: "non-veg",
      category: "burger",
      description: "A hamburger or simply burger is a food consisting of fillings...",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
    },
    {
      id: 2,
      name: "Chicken breast",
      price: 399,
      type: "non-veg",
      category: "chicken",
      description: "Crispy Chicken Parmesan: Golden-fried chicken cutlets...",
      image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg"
    },
    {
      id: 3,
      name: "biryani",
      price: 599,
      type: "veg",
      category: "biryani",
      description: "Delicious biryani",
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg"
    }
  ]

  const [foodType, setFoodType] = useState("all")
  const [foodCategory, setFoodCategory] = useState("all")

  const filteredFood = foodData.filter((item) => {
    const typeMatch = foodType === "all" || item.type === foodType
    const categoryMatch = foodCategory === "all" || item.category === foodCategory
    return typeMatch && categoryMatch
  })

  return (
    <div className='px-5 lg:px-20'>

      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home / india / indian fast food / 3
        </h3>

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <img
              className="w-full h-[40vh] object-cover"
              src="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg"
              alt=""
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              className="w-full h-[40vh] object-cover"
              src="https://images.pexels.com/photos/12473039/pexels-photo-12473039.jpeg"
              alt=""
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              className="w-full h-[40vh] object-cover"
              src="https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg"
              alt=""
            />
          </Grid>

        </Grid>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">
            Indian Fast Food
          </h1>

          <p className='text-gray-500 mt-1'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>

          <div className='space-y-3 mt-3'>
            <p className='text-gray-500 flex items-center gap-3'>
              <LocationOnIcon sx={{ color: "gray" }} />
              Mumbai, Maharastra
            </p>

            <p className='text-gray-500 flex items-center gap-3'>
              <CalendarTodayIcon sx={{ color: "gray" }} />
              Mon-Sun: 9:00 AM - 9:00 PM (Today)
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] flex relative">

        {/* LEFT SIDEBAR */}
        <div className="lg:w-[20%] pr-6 border-r border-gray-300">

          <div className="space-y-8 lg:sticky top-28">

            {/* FOOD TYPE */}
            <div>
              <Typography variant="h6" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl component="fieldset">
                <RadioGroup
                  value={foodType}
                  onChange={(e) => setFoodType(e.target.value)}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            {/* FOOD CATEGORY */}
            <div>
              <Typography variant="h6" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl component="fieldset">
                <RadioGroup
                  value={foodCategory}
                  onChange={(e) => setFoodCategory(e.target.value)}
                >
                  <FormControlLabel value="all" control={<Radio />} label="All" />

                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

          </div>
        </div>

        {/* RIGHT MENU */}
        <div className="lg:w-[80%] pl-8 space-y-5">

          {filteredFood.map((item) => (
            <div key={item.id} className="flex gap-4 border p-4 rounded-lg">

              <img
                src={item.image}
                alt=""
                className="w-32 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">₹{item.price}</p>
                <p className="text-gray-400 text-sm mt-2">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default RestaurantDetails