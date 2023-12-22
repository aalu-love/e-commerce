const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const defaultValueProducts = () => {
  let data = [];

  for (let i = 0; i < 10; i++) {
    const category = ["men", "women", "kids"];
    const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUVZA1L7H-DZisOAXhtkujYDLhuNwwwkxH7Q&usqp=CAU",
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/34/1503413099-marky-mark-happens1.jpg",
      "https://variety.com/wp-content/uploads/2023/02/Screen-Shot-2023-02-23-at-10.40.36-AM.png?w=1000&h=563&crop=1&resize=1000%2C563",
    ];
    const ranInt = randomIntFromInterval(0, 2);
    data.push({
      id: i,
      name: "popular hlkjsd lsuadlujasd lkuda",
      category: category[ranInt],
      image: images[ranInt],
      new_price: Math.round(Math.random() * 100),
      old_price: Math.round(Math.random() * 100),
    });
  }
  return data;
};
